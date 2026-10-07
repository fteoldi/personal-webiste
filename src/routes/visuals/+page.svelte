<script>
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { visuals } from '#lib/data/work.js';
</script>

<PageIntro title="Visuals">
	Charts and maps I made for colleagues' stories, from gathering the data to drawing the final
	graphic. Like most things in a newsroom, each one is the work of many people.
</PageIntro>

<div class="grid">
	{#each visuals as item, i}
		<a
			href={item.url}
			target={item.url !== '#' ? '_blank' : undefined}
			rel="noopener"
			class="rise"
			style:--i={i}
		>
			<span class="thumb"><img src={item.image} alt="" loading="lazy" /></span>
			<span class="title">{item.title}</span>
			<span class="meta">{item.role}, {item.year}</span>
		</a>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 36px var(--gap);
	}

	a > span {
		display: block;
	}

	img {
		transition: transform 0.6s var(--ease);
	}

	a:hover img {
		transform: scale(1.03);
	}

	.title {
		margin-top: 10px;
	}

	a:hover .title {
		color: var(--accent);
	}

	.meta {
		margin-top: 2px;
	}

	@media (max-width: 700px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 28px 16px;
		}
	}

	@media (max-width: 440px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
