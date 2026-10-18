<script>
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="wrap">
	<Header />
	<main>{@render children()}</main>
	<Footer />
</div>

<style>
	.wrap {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 32px 96px;
		box-sizing: border-box;
	}

	@media (max-width: 700px) {
		.wrap {
			padding: 28px 20px 80px;
		}
	}
</style>
