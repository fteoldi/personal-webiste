<!-- A 4:3 tile that crossfades whenever `src` changes. Shared by the grid promos. -->
<script>
	import { fade } from 'svelte/transition';

	let { src, duration = 900, delay = 0 } = $props();
</script>

<span class="thumb">
	{#key src}
		<img {src} alt="" transition:fade={{ duration, delay }} />
	{/key}
</span>

<style>
	.thumb {
		display: grid;
	}

	/* stack old and new image while they crossfade */
	img {
		grid-area: 1 / 1;
	}
</style>
