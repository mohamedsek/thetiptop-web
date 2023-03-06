<script>
	import { page } from '$app/stores';
	import logoDesktop from '$lib/assets/logo_desktop.png';
	import logoMobile from '$lib/assets/logo_mobile.png';
</script>

<div class="container">
	<header
		class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom border-dark"
	>
		<nav class="container navbar navbar-expand-md navbar-light">
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
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<!-- <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> -->

					<ul class="navbar-nav justify-content-center col-xs-12 ms-auto">
						<li class="text-center" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
							<a href="/" class="nav-link px-2 link-secondary">Acceuil</a>
						</li>
						<li class="text-center">
							<a href="#jeux-concours" class="nav-link px-2 link-dark">Le jeu-concours</a>
						</li>
						<li class="text-center">
							<a href="#lot-a-gagner" class="nav-link px-2 link-dark">Les gains</a>
						</li>
						<li
							class="text-center"
							aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
						>
							<a href="/login" class="nav-link px-2 link-dark">Connexion</a>
						</li>
						<li
							class="text-center"
							aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
						>
							<a href="/register" class="nav-link px-2 link-dark">Inscription</a>
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
