<script>
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'About' },
		{ href: '/visuals', label: 'Visuals' },
		{ href: '/pieces', label: 'Pieces' },
		{ href: '/other', label: 'Other' }
	];
</script>

<header>
	<a href="/" class="title">Filippo Teoldi</a>
	<nav aria-label="Pages">
		{#each links as { href, label }}
			<a {href} aria-current={page.url.pathname === href ? 'page' : undefined}>{label}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 12px 32px;
		margin-bottom: 72px;
	}

	nav {
		display: flex;
		gap: 24px;
	}

	nav a {
		position: relative;
		color: var(--grey);
		transition: color 0.2s;
	}

	nav a:hover,
	nav a[aria-current] {
		color: var(--ink);
	}

	nav a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -3px;
		height: 1.5px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s var(--ease);
	}

	nav a[aria-current]::after {
		transform: scaleX(1);
	}

	@media (max-width: 700px) {
		header {
			margin-bottom: 48px;
		}
	}
</style>
