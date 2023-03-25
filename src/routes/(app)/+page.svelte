<script>
	import mainHomePageImage from '$lib/assets/home/tea_home_page.png';
	import defaultGainImage from '$lib/assets/home/default_gain_image.png';
	import enveloppeSvg from '$lib/assets/home/enveloppe.svg';

	export let data;
</script>

<svelte:head>
	<title>ThéTipTop - Accueil</title>
	<meta name="description" content="ThéTipTop - Découvrez nos gammes de thés de très grande qualité, élaborées avec des mélanges signatures exclusifs, des thés détox, des thés blancs, des thés aux légumes et des infusions. Tous nos thés sont bios et Handmades. Savourez une expérience de dégustation unique avec ThéTipTop." />
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

<div class="inscription-banner">
	{#if data?.user}
		<a href="/participer">Je participe</a>
	{:else}
		<a href="/register">Je m'inscris</a>
	{/if}
</div>

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
					title={gain.title}
				/>
				<div
					class="gain-title position-absolute top-50 start-50 translate-middle text-white d-none"
				>
					<p>{gain.title}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
<section id="newsLetter" class="container mb-5 p-4  ">
	<h3 class="mb-4 text-center"><strong>Votre boite mail</strong> remplie de saveurs</h3>
	<div class="row">
		<p class="text-center">
			Tenez-vous informé(e) de l'actualité et des événements de Thétiptop en vous abonnant à notre
			newsletter
		</p>
		<!-- <div class=""><img src={enveloppeSvg} alt="" /></div> -->
		<div class="input-group mb-3 mt-4 myInput">
			<input
				type="text"
				class="form-control"
				placeholder="Enter email"
				aria-label="Recipient's username"
				aria-describedby="button-addon2"
			/>
			<button class="btn btn-success border-rad" type="button" id="button-addon2">Subscribe</button>
		</div>
		<p class="text-center lh-lg">
			En cliquant sur « INSCRIPTION », vous acceptez expressément de recevoir les offres
			commerciales et les actualités de Thétiptop par email selon les conditions suivantes et
			conformément à notre Politique de Confidentialité disponible <a href="">ici</a>.
		</p>
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
	.position-relative:hover .gain-title {
		display: block;
	}
	.myInput {
		max-width: 70%;
		margin: 0 auto;
	}
</style>
