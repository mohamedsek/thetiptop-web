<script>
	import { page } from '$app/stores';
	import logoDesktop from '$lib/assets/logo_desktop.png';
	import logoMobile from '$lib/assets/logo_mobile.png';

	let collapseMenu = true;
	function toggleMenu() {
		collapseMenu = !collapseMenu;
	}
	export let props;
</script>

<div class="container">
	<header
		class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom border-dark"
	>
		<nav class="container navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<div class="logo-wrapper">
					<a
						href="/"
						class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
					>
						<img class="logo d-none d-md-block" src={logoDesktop} alt="Logo" />
						<img class="logo d-md-none" src={logoMobile} alt="Logo" />
					</a>
				</div>
				<button
					on:click={toggleMenu}
					class="navbar-toggler"
					type="button"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="{collapseMenu ? 'collapse' : ''} navbar-collapse" id="navbarNav">
					
					<ul class="navbar-nav justify-content-center col-xs-12 ms-auto">
						
						<li class="text-center">
							<a href="/auth/logout" class="nav-link px-2 link-dark">Se déconnecter</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</div>

<style>
	.logo {
		height: auto;
		width: auto;
		max-height: 72px;
		max-width: 250px;
	}
</style>
