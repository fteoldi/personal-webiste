<!-- Four columns of mixed shapes scrolling in alternate directions (two on phones). Pauses on hover. -->
<script>
	let { images } = $props();

	const shapes = ['4/3', '3/4', '1', '4/5'];
	// each column starts at a different image; the list is doubled so the loop is seamless
	const columns = [0, 1, 2, 3].map((c) => {
		const list = images.map((_, k) => (k * 4 + c) % images.length);
		return [...list, ...list];
	});
</script>

<div class="columns">
	{#each columns as list, c}
		<div class="col" style:animation-duration="{38 + c * 6}s">
			{#each list as i}
				<span class="tile" style:aspect-ratio={shapes[(i + c) % 4]}>
					<img src={images[i]} alt="" />
				</span>
			{/each}
		</div>
	{/each}
</div>

<style>
	.columns {
		height: clamp(320px, 42vw, 500px);
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--gap);
		mask-image: linear-gradient(transparent, #000 10%, #000 90%, transparent);
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		animation: up linear infinite;
	}

	.col:nth-child(even) {
		animation-name: down;
	}

	.columns:hover .col {
		animation-play-state: paused;
	}

	.tile {
		display: block;
		flex-shrink: 0;
		background: var(--tile);
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	/* half the column plus half a gap = exactly one copy of the list */
	@keyframes up {
		to {
			transform: translateY(calc(-50% - var(--gap) / 2));
		}
	}

	@keyframes down {
		from {
			transform: translateY(calc(-50% - var(--gap) / 2));
		}
	}

	@media (max-width: 700px) {
		.columns {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.col:nth-child(n + 3) {
			display: none;
		}
	}
</style>
