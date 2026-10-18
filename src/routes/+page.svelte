<script>
	import { promo } from '#lib/data/work.js';
	// Pick one promo option; for "Text only", delete the promo block below.
	import Promo from '#lib/components/promo/PromoSwap.svelte';
	// import Promo from '#lib/components/promo/PromoWave.svelte';
	// import Promo from '#lib/components/promo/PromoColumns.svelte';
</script>

<svelte:head>
	<title>Filippo Teoldi</title>
</svelte:head>

<p class="display lead">
	Filippo is a visual journalist at The Economist, working with data, charts, maps and interactive
	stories.
</p>

<div class="promo">
	<Promo images={promo} />
</div>

<p class="bio">
	He joined The Economist in 2023, after working as a data editor at Domani and as a junior
	economist at the Economic Advisory Council to the Italian Prime Minister. He studied economics and
	political science at Bocconi and Columbia. Away from the screen he enjoys biographies, photography
	and dahlias, and one day hopes to move to Japan.
</p>

<style>
	.lead {
		max-width: 30em;
	}

	/* 48px around the promo; 16px between the paragraphs when there is none */
	.promo {
		margin: 48px 0 32px;
	}

	.bio {
		color: var(--grey);
		max-width: 40em;
		margin: 16px 0 0;
	}

	@media (max-width: 700px) {
		.promo {
			margin: 32px 0 16px;
		}
	}
</style>
