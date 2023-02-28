<script>
	import { page } from '$app/stores';
	import '$lib/css/normalize.css';
	import '$lib/css/reset.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Footer from './Footer.svelte';
	import './styles.css';

	export let data;
</script>

<div class="app">
	<div class="container">
		<header
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
		>
			<a
				href="/"
				class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
			>
				<p>Logo</p>
				<!-- <img src="logo.png" alt="Logo" /> -->
			</a>

			<ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" class="nav-link px-2 link-secondary">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about" class="nav-link px-2 link-dark">About</a>
				</li>
			</ul>

			<div class="col-md-3 text-end">
				{#if data?.user}
					<a href="/auth/logout" rel="external" class="btn btn-outline-primary me-2">Logout</a>
				{:else}
					<a href="/login" class="btn btn-outline-primary me-2">Login</a>
					<a href="/register" class="btn btn-primary">Sign-up</a>
				{/if}
			</div>
		</header>
	</div>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
