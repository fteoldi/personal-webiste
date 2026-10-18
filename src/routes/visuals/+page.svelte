<script>
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { visuals } from '#lib/data/work.js';
</script>

<PageIntro title="Visuals">
	Charts and maps I made for colleagues' stories, from gathering the data to drawing the final
	graphic. Like most things in a newsroom, each one is the work of many people.
</PageIntro>

<!-- Masonry: images keep their own shape, columns fill top to bottom -->
<div class="wall">
	{#each visuals as item, i}
		<a href={item.url} target="_blank" rel="noopener" class="rise" style:--i={Math.min(i, 12)}>
			<img src={item.image} alt="" loading="lazy" />
			<span class="meta">{item.title} · {item.pub}, {item.year}</span>
		</a>
	{/each}
</div>

<style>
	.wall {
		columns: 3;
		column-gap: var(--gap);
	}

	a {
		display: block;
		break-inside: avoid;
		margin-bottom: 32px;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		background: var(--tile);
		transition: opacity 0.3s;
	}

	a:hover img {
		opacity: 0.85;
	}

	.meta {
		display: block;
		margin-top: 8px;
		line-height: 1.4;
	}

	a:hover .meta {
		color: var(--accent);
	}

	@media (max-width: 700px) {
		.wall {
			columns: 2;
			column-gap: 16px;
		}
	}

	@media (max-width: 440px) {
		.wall {
			columns: 1;
		}
	}
</style>
