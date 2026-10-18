<!-- The list of work. On desktop, hovering a row shows its image next to the pointer. -->
<script>
	import { onMount, tick } from 'svelte';

	let { items } = $props();

	let image = $state(null); // image of the hovered row
	let src = $state(''); // kept after leaving, so the image fades out instead of vanishing
	let x = $state(0);
	let y = $state(0);
	let preview = $state();

	// Phones: "Title | Publication, year". If the details wrap onto a new line, drop the bar.
	let details = [];
	let wrapped = $state([]);

	async function measure() {
		wrapped = [];
		await tick();
		wrapped = details.map((el) => {
			const line = el?.getClientRects()[0];
			return !!line && line.left - el.parentElement.getBoundingClientRect().left < 1;
		});
	}

	onMount(() => {
		measure();
		document.fonts?.ready.then(measure);
	});

	function move(e) {
		// keep the image inside the window
		x = Math.min(e.clientX + 24, innerWidth - (preview?.offsetWidth ?? 0) - 16);
		y = Math.min(e.clientY + 16, innerHeight - (preview?.offsetHeight ?? 0) - 16);
	}
</script>

<svelte:window onmousemove={move} onresize={measure} />

<ul>
	{#each items as item, i}
		<!-- a rule above the first piece of each publication -->
		<li class:first={i === 0 || items[i - 1].pub !== item.pub}>
			<a
				href={item.url}
				target="_blank"
				rel="noopener"
				onmouseenter={() => item.image && (image = src = `/assets/${item.image}`)}
				onmouseleave={() => (image = null)}
			>
				{item.title}
				<small bind:this={details[i]} class:wrapped={wrapped[i]}
					><span class="bar">|</span> {item.pub}, {item.year}</small
				>
				<span class="meta">{item.pub}, {item.year}</span>
			</a>
		</li>
	{/each}
</ul>

{#if src}
	<img
		bind:this={preview}
		class="preview"
		class:on={image}
		{src}
		alt=""
		aria-hidden="true"
		style:transform="translate({x}px, {y}px)"
	/>
{/if}

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li.first {
		border-top: 1px solid var(--rule);
		padding-top: 6px;
	}

	li.first:not(:first-child) {
		margin-top: 24px;
	}

	a {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 24px;
		align-items: baseline;
		padding: 6px 0;
	}

	.meta,
	small {
		font-size: 13px;
		color: var(--muted);
		white-space: nowrap;
	}

	/* inline details: phones only */
	small {
		display: none;
	}

	.bar {
		margin-left: 4px;
	}

	.preview {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 320px;
		pointer-events: none;
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
		opacity: 0;
		transition: opacity 0.2s;
	}

	.preview.on {
		opacity: 1;
	}

	/* Narrow screens: one line of text, "Title | Publication, year" */
	@media (max-width: 700px) {
		a {
			display: block;
			font-size: 15px;
			line-height: 1.35;
		}

		.meta {
			display: none;
		}

		small {
			display: inline;
		}

		/* details on their own line: no bar */
		small.wrapped {
			display: block;
		}

		.wrapped .bar {
			display: none;
		}
	}

	@media (max-width: 700px), (hover: none) {
		.preview {
			display: none;
		}
	}
</style>
