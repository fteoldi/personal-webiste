<script>
	let { title, children } = $props();
</script>

<svelte:head>
	<title>{title} – Filippo Teoldi</title>
</svelte:head>

<h1 class="display">{title}</h1>
<p>{@render children()}</p>

<style>
	p {
		color: var(--grey);
		max-width: 40em;
		margin: 8px 0 32px;
	}
</style>
