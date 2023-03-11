<script>
	import mainHomePageImage from '$lib/assets/home/tea_home_page.png';
	import gainService from '$lib/services/gainService';

	/** @type {import('./$types').PageData} */
	export let data;

	let userGains = data.userGains;

	async function handleSubmit(event) {
		const formData = new FormData(event.target);

		let ticketCode = {
			code: formData.get('code')
		};

		const ticketOk = await gainService.participate(data.accessToken, ticketCode);
		if (ticketOk) {
			userGains = await gainService.getUserGains(data.accessToken);
		}
	}
</script>

<div class="d-flex justify-content-center mb-5">
	<img src={mainHomePageImage} alt="thé" class="img-fluid rounded-3" width="100%" />
</div>
<section class="container m-5">
	<article class="row justify-content-center">
		<div class="col-md-10">
			<h1 class="text-center mb-5">Modalités du jeu-concours</h1>
			<ul class="liste-style">
				<li>
					Votre code se trouve sur chaque ticket ou facture d'un montant supérieur à 49€ d'achat
					effectué dans l'une de nos Boutique.
				</li>
				<li><strong>100%</strong> des codes sont gagnants</li>
				<li>
					En participant avec un code, vous seriez éligible au tirage au sort qui aura lieu à la
					clôture du jeu-concours pour <strong>ganger un an de thé d'une valeur de 360€</strong>
				</li>
			</ul>
		</div>
	</article>
	<article class="row justify-content-center">
		<div class="col-md-10">
			<h2 class="text-center fw-bold fs-4 mb-5">
				Vous avez déjà un code? <br />entrez le ci-dessous et découvrez votre gains !
			</h2>

			<div class="container">
				<form class="row mb-5" method="POST" on:submit|preventDefault={handleSubmit}>
					<div class="col">
						<input
							type="text"
							class="form-control form-control-lg"
							id="ticket-code-input"
							placeholder="Entrer votre code"
							name="code"
							width="100%"
						/>
					</div>
					<div class="col-4">
						<button type="submit" class="btn btn-lg form-control btn-participate">Participer</button>
					</div>
				</form>
			</div>
		</div>
	</article>
</section>

<h3 class="ttp-green text-center fs-2 fw-bold">MES GAINS</h3>
<div class="gains-list border rounded text-center mt-3 pt-3 pb-4">
	{#if !userGains.length}
		<p class="ttp-green fs-5">Vous n'avez pas encore de gain à afficher !</p>
		<p>
			Participer au concours en obtenant un code pour tout achat supérieur à 49€ en magasin ou en
			ligne.
		</p>
		<p>Tous les tickets sont gagnants!</p>
	{:else}
		<div class="d-flex justify-content-center">
			<div class="text-start">
				{#each userGains as gain}
					<p>{gain.ticketCode}: {gain.gainTitle}</p>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.gains-list {
		background-color: #efefef;
	}

	.btn-participate {
		background-color: #006837;
		color: whitesmoke;
	}

	.ttp-green {
		color: #006837;
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
</style>
