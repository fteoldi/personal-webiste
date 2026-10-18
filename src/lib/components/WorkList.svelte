<!-- The list of work. On desktop, hovering a row shows its image next to the pointer. -->
<script>
	let { items } = $props();

	let image = $state(null); // image of the hovered row
	let src = $state(''); // kept after leaving, so the image fades out instead of vanishing
	let x = $state(0);
	let y = $state(0);
	let preview = $state();

	function move(e) {
		// keep the image inside the window
		x = Math.min(e.clientX + 24, innerWidth - (preview?.offsetWidth ?? 0) - 16);
		y = Math.min(e.clientY + 16, innerHeight - (preview?.offsetHeight ?? 0) - 16);
	}
</script>

<svelte:window onmousemove={move} />

<ul>
	{#each items as item}
		<li>
			<a
				href={item.url}
				target="_blank"
				rel="noopener"
				onmouseenter={() => item.image && (image = src = `/assets/${item.image}`)}
				onmouseleave={() => (image = null)}
			>
				{item.title}
				<span>{item.pub}, {item.year}</span>
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
		border-top: 1px solid var(--rule);
	}

	a {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 24px;
		align-items: baseline;
		padding: 12px 0;
		border-bottom: 1px solid var(--rule);
	}

	span {
		font-size: 13px;
		color: var(--muted);
		white-space: nowrap;
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

	@media (max-width: 700px), (hover: none) {
		.preview {
			display: none;
		}
	}
</style>
