<script>
	import mainHomePageImage from '$lib/assets/home/tea_home_page.png';
	import defaultGainImage from '$lib/assets/home/default_gain_image.png';

	export let data;
</script>

<svelte:head>
	<title>Page d'accueil</title>
	<meta name="description" content="Thé-tip-top" />
</svelte:head>

<section class="container">
	<div class="row mb-5 ">
		<img width="100%" src={mainHomePageImage} alt="thé" />
	</div>
	<div id="jeux-concours" class="mb-4 row text-center ">
		<h1 class="title">
			ThéTipTop organise un jeu-concours<br />
			à l'occasion d'ouverture de notre 10ème Boutique
		</h1>
	</div>
	<div class="row gray-text ms-5 text-sm">
		<p class="ms-4">Le jeu-concours est 100% gagnant, pour participer :</p>
		<ul class="liste-style">
			<li>Inscrivez vous</li>
			<li>Entrez votre code de ticket</li>
			<li>Retirez votre lot en magasin</li>
		</ul>
	</div>
</section>

<div class="inscription-banner"><a href="/register">Je m'inscris</a></div>

<section class="container">
	<div class="m-5 row text-center">
		<h2 class="title">Modalités du jeu-concours</h2>
	</div>
	<div class="row ms-5">
		<ul class="liste-style">
			<li>
				Votre code se trouve sur chaque ticket ou facture d'un montant supérieur à 49€ d'achat
				effectué dans l'une de nos Boutique.
			</li>
			<li><span class="fw-bold">100%</span> des codes sont gagnants.</li>
			<li>
				En participant avec un code, vous seriez éligible au tirage au sort qui aura lieu à la
				clôture du jeu-concours pour <span class="fw-bold"
					>gagner un an de thé d'une valeur de 360€</span
				>
			</li>
		</ul>
	</div>
</section>

<section id="lot-a-gagner" class="container mb-5">
	<div class="m-5 row text-center">
		<h2 class="title">Lot à gagner</h2>
	</div>
	<div class="row">
		{#each data.gains as gain}
			<div class="p-3 gain-grid col-12 col-md-6 col-lg-4 text-center position-relative">
				<!-- <img width="300px" height="300px" alt={gain.title} src={gain.imageUrl} /> -->
				<img
					width="300px"
					height="300px"
					alt={gain.title}
					src={defaultGainImage}
					class="img-fluid "
				/>
				<div class="gain-title position-absolute top-50 start-50 translate-middle text-white d-none">
					<p>{gain.title}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
<style>
	.inscription-banner {
		height: 3.2rem;
		background: #006837;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		border-radius: 0.2rem;
	}
	.inscription-banner a {
		text-decoration: none;
		color: #ffffff;
	}

	.liste-style li {
		margin: 0;
		padding: 0px 0 8px 26px;
		list-style: none;
		background-image: url(/src/lib/assets/home/v.png);
		background-repeat: no-repeat;
		background-position: left top;
		background-size: 1.1rem;
	}

	.title {
		font-weight: 700;
		font-size: 2rem;
	}

	.gray-text {
		font-style: normal;
		text-align: left;
		color: #707070;
	}
	.position-relative:hover .gain-title  {
		display: block;
	}
</style>
