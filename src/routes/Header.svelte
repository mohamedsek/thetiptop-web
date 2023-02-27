<script>
	import { page } from '$app/stores';
	import { authenticate } from '$services/userService';
	import { onMount } from 'svelte';
	import { auth } from './store';

	let authentication;
	auth.subscribe((value) => {
		authentication = value;
	});

	onMount(async () => {
		await authenticate();
	});
</script>

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
			{#if authentication && authentication.isLoggedIn}
				Hello {authentication.user.firstName}
				<a href="/auth/logout" rel="external" class="btn btn-outline-primary me-2">Logout</a>
			{:else}
				<a href="/login" class="btn btn-outline-primary me-2">Login</a>
				<a href="/register" class="btn btn-primary">Sign-up</a>
			{/if}
		</div>
	</header>
</div>
