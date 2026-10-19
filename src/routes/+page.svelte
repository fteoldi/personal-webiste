<script>
	import { onMount } from 'svelte';
	import WorkList from '#lib/components/WorkList.svelte';
	import { work } from '#lib/data/work.js';

	// Put the email together in the browser, so it never appears in the published HTML
	// that spam bots scrape.
	let email = $state('');
	onMount(() => (email = ['hello', 'filippoteoldi.com'].join('@')));
</script>

<svelte:head>
	<title>Filippo Teoldi</title>
</svelte:head>

<main>
	<p class="name">Filippo Teoldi</p>

	<section class="intro">
		<figure>
			<img class="portrait" src="/assets/portrait.jpg" alt="Filippo Teoldi" />
			<figcaption>© Jo Banks</figcaption>
		</figure>
		<div>
			<p class="lead">
				Filippo is a visual journalist working with data, charts, maps and interactive stories.
			</p>
			<p class="bio">
				He joined The Economist in 2023. His work has also appeared in Domani, Bloomberg
				Businessweek and The Wall Street Journal’s Daily Shot. He studied economics and political
				science at Bocconi and Columbia University, and is always looking for new ways to tell
				stories with data. He is based in London.
			</p>
		</div>
	</section>

	<h2>Selected work</h2>
38:	<p class="note">Contributions ranged from data and research to visuals, code and writing</p>
	<WorkList items={work} />

	<footer>
		<span>© {new Date().getFullYear()} Filippo Teoldi</span>
		{#if email}<a href="mailto:{email}">{email}</a>{/if}
	</footer>
</main>

<style>
	main {
		max-width: 760px;
		margin: 0 auto;
		padding: 40px 32px 96px;
	}

	.name {
		font-weight: 500;
		margin: 0 0 72px;
	}

	.intro {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: 32px;
		align-items: start;
		margin-bottom: 72px;
	}

	figure {
		margin: 0;
	}

	.portrait {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
	}

	figcaption {
		margin-top: 4px;
		font-size: 11px;
		color: var(--muted);
	}

	.lead {
		font-size: 22px;
		line-height: 1.4;
		letter-spacing: -0.01em;
		margin: 0;
	}

	.bio {
		color: var(--muted);
		margin: 16px 0 0;
	}

	h2 {
		font-size: 16px;
		font-weight: 500;
		margin: 0;
	}

	.note {
		font-size: 13px;
		color: var(--muted);
		margin: 2px 0 12px;
	}

	footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 80px;
		padding-top: 20px;
		border-top: 1px solid var(--rule);
		font-size: 13px;
		color: var(--muted);
	}

	footer a {
		color: var(--ink);
	}

	@media (max-width: 700px) {
		main {
			padding: 28px 20px 80px;
		}

		.name {
			margin-bottom: 48px;
		}

		.intro {
			grid-template-columns: 1fr;
			gap: 24px;
			margin-bottom: 56px;
		}

		.portrait {
			width: 120px;
		}
	}
</style>
