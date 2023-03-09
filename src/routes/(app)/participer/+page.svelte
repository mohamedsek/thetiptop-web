<script>
	import * as api from '$lib/services/api.js';

	let userGains = [];

	const participate = async (event) => {
		const formData = new FormData(event.target);

		let ticketCode = {
			code: formData.get('code')
		};

		console.log(ticketCode);

		// TODO remove Token from call params
		let askForGainRes = await api.post(
			'/tickets/gain',
			ticketCode,
			'injectToken'
		);
		if (askForGainRes.ok) {
			// reload user's gains
			// TODO remove Token from call params
			let userGainsRes = await api.get(
				'/tickets/user',
				'injectToken'
			);

			if (userGainsRes.ok) {
				userGains = await userGainsRes.json();
				console.log(userGains);
			}
		}
	};
</script>

<div class="d-flex justify-content-center">
	<img src="/img/tea-banner.png" class="img-fluid rounded-3" alt="Tea banner" />
</div>

<h1 class="text-center">Modalités du jeu-concours</h1>
<p>
	Votre code se trouve sur chaque ticket ou facture d'un montant supérieur à 49€ d'achat effectué
	dans l'une de nos Boutique.
</p>
<p><strong>100%</strong> des codes sont gagnants</p>
<p>
	En participant avec un code, vous seriez éligible au tirage au sort qui aura lieu à la clôture du
	jeu-concours pour <strong>ganger un an de thé d'une valeur de 360€</strong>
</p>

<h2 class="text-center fw-bold fs-4">
	Vous avez déjà un code? <br />entrez le ci-dessous et découvrez votre gains !
</h2>

<form class="row mb-5" method="POST" on:submit|preventDefault={participate}>
	<div class="col-auto">
		<input
			type="text"
			class="form-control-lg"
			id="ticket-code-input"
			placeholder="Entrer votre code"
			name="code"
		/>
	</div>
	<div class="col-4">
		<button type="submit" class="btn btn-success btn-lg mb-3">Participer</button>
	</div>
</form>

<h3 class="text-success text-center fs-2 fw-bold">MES GAINS</h3>
<div class="gains-list border rounded text-center mt-3 pt-3 pb-4">
	{#if !userGains.length}
		<p class="text-success fs-5">Vous n'avez pas encore de gain à afficher !</p>
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
</style>
