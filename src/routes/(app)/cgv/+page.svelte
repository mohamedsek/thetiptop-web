<script>
	export let title = 'Conditions générales de vente';
</script>

<svelte:head>
	<title>ThéTipTop - Conditions générales de vente</title>
	<meta
		name="description"
		content="Découvrez les Conditions Générales de Vente de TheTipTop pour les achats en ligne. Consultez nos conditions pour connaître les modalités de commande, de paiement, de livraison, de retour et de litiges. Achetez en toute confiance avec TheTipTop."
	/>
</svelte:head>
<div class="cgv">
	<h1>{title}</h1>
	<h2>1. Objet</h2>
	<p>
		Les présentes conditions générales de vente régissent les relations contractuelles entre
		TheTipTop et son client, dans le cadre d'un système de vente à distance.
	</p>
	<h2>2. Prix</h2>
	<p>
		Les prix sont indiqués en euros et sont applicables pour la France métropolitaine. Ils ne
		tiennent pas compte des frais de livraison, facturés en supplément du prix des produits achetés.
	</p>
	<h2>3. Commande</h2>
	<p>
		Le client valide sa commande en cliquant sur le bouton "Valider la commande" en bas de la page
		de récapitulation de sa commande. Il déclare avoir pris connaissance et accepté les présentes
		conditions générales de vente avant de passer sa commande.
	</p>
	<h2>4. Paiement</h2>
	<p>
		Le paiement s'effectue en ligne par carte bancaire, via une interface sécurisée. TheTipTop se
		réserve le droit de refuser toute commande ou toute livraison en cas de litige existant avec le
		client, de non-paiement total ou partiel d'une commande précédente par le client, de refus
		d'autorisation de paiement par carte bancaire des organismes bancaires.
	</p>
	<h2>5. Livraison</h2>
	<p>
		La livraison est effectuée à l'adresse indiquée par le client lors de sa commande. Les risques
		sont à la charge de l'acquéreur à compter du moment où les produits ont quitté les locaux de
		TheTipTop. Le client est tenu de vérifier l'état de la marchandise à la livraison et dispose
		d'un délai de trois jours pour signaler tout dommage ou défaut de conformité.
	</p>
	<h2>6. Droit de rétractation</h2>
	<p>
		Le client dispose d'un délai de 14 jours à compter de la réception des produits pour exercer son
		droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités, à l'exception
		des frais de retour qui restent à sa charge.
	</p>
	<h2>7. Propriété intellectuelle</h2>
	<p>
		Tous les éléments du site TheTipTop sont et restent la propriété intellectuelle et exclusive de
		TheTipTop. Nul n'est autorisé à reproduire, exploiter, rediffuser ou utiliser à quelque titre
		que ce soit, même partiellement, des éléments du site qu'ils soient logiciels, visuels ou
		sonores.
	</p>
	<h2>8. Litiges</h2>
	<p>
		Les présentes conditions générales de vente sont soumises à la loi française. En cas de litige,
		les tribunaux français seront seuls compétents.
	</p>
</div>

<style>
	.cgv {
		max-width: 800px;
		margin: 0 auto;
		padding: 40px;
		color: #333;
	}

	.cgv h1 {
		font-size: 32px;
		font-weight: bold;
		color: #333;
		text-align: center;
		margin-bottom: 30px;
	}

	.cgv h2 {
		font-size: 24px;
		font-weight: bold;
		color: #333;
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.cgv p {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
		text-align: justify;
		margin-bottom: 20px;
	}
</style>
