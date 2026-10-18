<script>
	import WorkList from '#lib/components/WorkList.svelte';
	import { work } from '#lib/data/work.js';
</script>

<svelte:head>
	<title>Filippo Teoldi</title>
</svelte:head>

<main>
	<p class="name">Filippo Teoldi</p>

	<section class="intro">
		<img class="portrait" src="/assets/portrait.jpg" alt="Filippo Teoldi" />
		<div>
			<p class="lead">
				Filippo is a visual journalist at The Economist, working with data, charts, maps and
				interactive stories.
			</p>
			<p class="bio">
				He joined The Economist in 2023, after working as a data editor at Domani and as a junior
				economist at the Economic Advisory Council to the Italian Prime Minister. He studied
				economics and political science at Bocconi and Columbia. Away from the screen he enjoys
				biographies, photography and dahlias, and one day hopes to move to Japan.
			</p>
		</div>
	</section>

	<h2>Selected work</h2>
	<WorkList items={work} />

	<footer>
		<span>© {new Date().getFullYear()} Filippo Teoldi</span>
		<a href="mailto:filippo.teoldi@gmail.com">filippo.teoldi@gmail.com</a>
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

	.portrait {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
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
		font-size: 13px;
		font-weight: 400;
		color: var(--muted);
		margin: 0 0 8px;
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
