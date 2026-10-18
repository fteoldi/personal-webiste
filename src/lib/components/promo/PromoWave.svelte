<!-- A 2×4 grid (2×2 on phones); every 4.2s all tiles move on to the next images in a wave. -->
<script>
	import { onMount } from 'svelte';
	import Fade from './Fade.svelte';

	let { images } = $props();
	let start = $state(0);

	onMount(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => (start += 8), 4200);
		return () => clearInterval(id);
	});
</script>

<div class="grid">
	{#each { length: 8 }, k}
		<Fade
			src={images[(start + k) % images.length]}
			duration={800}
			delay={(k % 4) * 130 + Math.floor(k / 4) * 70}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--gap);
	}

	@media (max-width: 700px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.grid > :global(:nth-child(n + 5)) {
			display: none;
		}
	}
</style>
