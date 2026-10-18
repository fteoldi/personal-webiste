<!-- Four tiles in a row; every 2.2s one random tile swaps to an image not on screen. -->
<script>
	import { onMount } from 'svelte';
	import Fade from './Fade.svelte';

	let { images } = $props();
	let shown = $state([0, 1, 2, 3]);

	onMount(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let last = -1;
		const id = setInterval(() => {
			let tile;
			do tile = Math.floor(Math.random() * 4);
			while (tile === last);
			last = tile;
			const hidden = images.map((_, i) => i).filter((i) => !shown.includes(i));
			shown[tile] = hidden[Math.floor(Math.random() * hidden.length)];
		}, 2200);
		return () => clearInterval(id);
	});
</script>

<div class="grid">
	{#each shown as i}
		<Fade src={images[i]} />
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
	}
</style>
