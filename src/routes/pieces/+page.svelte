<script>
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { pieces } from '#lib/data/work.js';

	let active = $state(null); // index of the hovered row
	let shown = $state(0); // last hovered piece, kept while the panel fades out
	let top = $state(0);
	let panelHeight = $state(0);

	function enter(i, row) {
		active = shown = i;
		// centre the panel on the row, never above the top of the list
		top = Math.max(0, row.offsetTop + row.offsetHeight / 2 - panelHeight / 2);
	}
</script>

<PageIntro title="Pieces">
	Stories I helped shape: I built the scrollytelling, interactive charts or visuals that carry them.
</PageIntro>

<div class="layout">
	<ul>
		{#each pieces as item, i}
			<li class="rise" style:--i={i}>
				<a
					href={item.url}
					target={item.url !== '#' ? '_blank' : undefined}
					rel="noopener"
					onmouseenter={(e) => enter(i, e.currentTarget)}
					onmouseleave={() => (active = null)}
				>
					<span class="title">{item.title}<span class="arrow">→</span></span>
					<span class="meta">{item.pub}</span>
					<span class="meta year">{item.year}</span>
				</a>
			</li>
		{/each}
	</ul>

	<aside aria-hidden="true" class:visible={active !== null} style:top="{top}px" bind:offsetHeight={panelHeight}>
		<span class="thumb"><img src={pieces[shown].image} alt="" /></span>
		<p>{pieces[shown].text}</p>
		<span class="meta">{pieces[shown].pub}, {pieces[shown].year}</span>
	</aside>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 300px;
		gap: 48px;
		align-items: start;
	}

	ul {
		position: relative;
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--rule);
	}

	a {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 9rem 3rem;
		gap: var(--gap);
		align-items: baseline;
		padding: 12px 0;
		border-bottom: 1px solid var(--rule);
	}

	.title {
		transition: color 0.2s;
	}

	a:hover .title {
		color: var(--accent);
	}

	.arrow {
		display: inline-block;
		margin-left: 6px;
		color: var(--accent);
		opacity: 0;
		transform: translateX(-4px);
		transition:
			opacity 0.25s,
			transform 0.25s var(--ease);
	}

	a:hover .arrow {
		opacity: 1;
		transform: none;
	}

	.year {
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	aside {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;
		opacity: 0;
		transition:
			opacity 0.25s,
			top 0.35s var(--ease);
	}

	aside.visible {
		opacity: 1;
	}

	aside p {
		margin: 0;
	}

	@media (max-width: 700px) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
		}

		aside {
			display: none;
		}

		a {
			grid-template-columns: minmax(0, 1fr) auto;
			gap: 2px 16px;
		}

		.title {
			grid-column: 1 / -1;
		}
	}
</style>
