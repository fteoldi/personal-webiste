<script>
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { other } from '#lib/data/work.js';
</script>

<PageIntro title="Other">
	Work beyond the newsroom: exhibitions, collaborations and side projects.
</PageIntro>

{#each other as item, i}
	<article class="rise" style:--i={i}>
		<span class="thumb"><img src={item.image} alt="" loading="lazy" /></span>
		<div>
			<h2 class="title">{item.title}</h2>
			<span class="meta">{item.where}, {item.year}</span>
			<p>{item.text}</p>
			{#if item.url !== '#'}
				<p><a href={item.url} target="_blank" rel="noopener">See the project →</a></p>
			{/if}
		</div>
	</article>
{/each}

<style>
	article {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--gap);
		padding-bottom: 40px;
		margin-bottom: 40px;
		border-bottom: 1px solid var(--rule);
	}

	div {
		grid-column: span 2;
	}

	h2 {
		font-size: 16px;
		margin: 0;
	}

	.meta {
		display: block;
		margin-top: 2px;
	}

	p {
		max-width: 32em;
		margin: 13px 0 0;
	}

	a {
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	a:hover {
		color: var(--accent);
	}

	@media (max-width: 700px) {
		article {
			grid-template-columns: minmax(0, 1fr);
		}

		div {
			grid-column: auto;
		}
	}
</style>
