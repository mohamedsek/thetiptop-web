<script>
	export let title = 'Mentions Légales';
</script>

<svelte:head>
	<title>ThéTipTop - Mentions légales</title>
	<meta
		name="description"
		content="Découvrez les mentions légales de ThéTipTop, votre magasin de thé haut de gamme. Informations sur notre société,"
	/>
</svelte:head>
<div class="mentions-legal">
	<h1>{title}</h1>

	<p>
		La société ThéTipTop SARL, au capital de 150 000€, dont le siège social est situé au 18 rue Leon
		Frot, 75011 Paris, immatriculée au RCS de Paris sous le numéro B 517 403 572, représentée par
		son Directeur Général, Monsieur Lucas Mercier, exploite le site web www.thetiptop.com.
	</p>

	<h2>Coordonnées</h2>

	<ul>
		<li>Adresse email : <a href="mailto:contact@thetiptop.com">contact@thetiptop.com</a></li>
		<li>Téléphone : +33 (0) 1 00 00 21 16</li>
		<li>Portable : +33 (0) 6 78 25 25 23</li>
		<li>Fax : +33 (0) 1 00 00 21 15</li>
		<li>Numéro de Siret : 43954371800030</li>
		<li>Code APE : 5520Z</li>
	</ul>

	<h2>Hébergeur</h2>

	<ul>
		<li>SAS au capital de 10 069 020 €</li>
		<li>RCS Lille Métropole 424 761 419 00045</li>
		<li>Code APE 2620Z</li>
		<li>Numéro de TVA : FR 22 424 761 419</li>
		<li>Siège social : 2 rue Kellermann - 59100 Roubaix - France</li>
		<li>Directeur de la publication : Octave KLABA</li>
		<li>Président : Henryk KLABA</li>
		<li>Directeur général : Miroslaw KLABA</li>
		<li>Directeur général délégué : Octave KLABA</li>
		<li>Directeur général délégué : Halina KLABA</li>
	</ul>
	<p>
		Le site est soumis à la loi française. Toute reproduction, totale ou partielle, du contenu du
		site est interdite sans autorisation préalable de la société ThéTipTop. Les marques et logos
		figurant sur le site sont des marques déposées de la société ThéTipTop ou de ses partenaires.
	</p>

	<p>
		Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un
		droit d'accès, de modification et de suppression des données vous concernant. Vous pouvez
		exercer ce droit en nous contactant à l'adresse email suivante : <a
			href="mailto:contact@thetiptop.com">contact@thetiptop.com</a
		>.
	</p>
	<p>
		Le site peut contenir des liens vers d'autres sites web. La société ThéTipTop décline toute
		responsabilité quant aux contenus et pratiques de ces sites.
	</p>
</div>

<style>
	.mentions-legal {
		max-width: 800px;
		margin: 0 auto;
		padding: 40px;
		color: #333;
	}

	.mentions-legal h1 {
		font-size: 32px;
		font-weight: bold;
		color: #333;
		text-align: center;
		margin-bottom: 30px;
	}

	.mentions-legal p {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
		text-align: justify;
	}

	.mentions-legal ul {
		list-style: none;
		padding: 0;
		margin: 30px 0;
	}

	.mentions-legal ul li {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
		margin-bottom: 10px;
	}

	.mentions-legal a {
		color: #0077c2;
		text-decoration: none;
		font-weight: bold;
	}

	.mentions-legal a:hover {
		text-decoration: underline;
	}
</style>
