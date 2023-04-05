<script>
	export let title = 'Politique de cookies';
</script>

<svelte:head>
	<title>ThéTipTop - Politique de cookies</title>
	<meta
		name="description"
		content="Politique de cookies du site TheTipTop"
	/>
</svelte:head>
<div class="cookies">
	<h1>{title}</h1>

	<p>
		Le site TheTipTop utilise des cookies afin d'améliorer l'expérience utilisateur et de vous
		proposer des contenus adaptés à vos centres d'intérêts.
	</p>
	<h2>Qu'est-ce qu'un cookie ?</h2>
	<p>
		Un cookie est un petit fichier texte stocké sur votre ordinateur ou votre appareil mobile par un
		site web lorsque vous le visitez. Il permet au site de mémoriser vos actions et préférences
		(telles que la langue choisie, la taille de la police, etc.) pendant une période donnée, afin
		que vous n'ayez pas à les répéter chaque fois que vous revenez sur le site ou naviguez d'une
		page à l'autre.
	</p>
	<h2>Comment utilisons-nous les cookies ?</h2>
	<p>Nous utilisons des cookies pour :</p>
	<ul>
		<li>Vous identifier lorsque vous vous connectez à votre compte utilisateur</li>
		<li>Vous proposer des publicités ciblées en fonction de vos centres d'intérêts</li>
		<li>Améliorer la performance et la sécurité du site</li>
	</ul>
	<h2>Comment contrôler les cookies ?</h2>
	<p>
		Vous pouvez contrôler et/ou supprimer des cookies à tout moment en modifiant les paramètres de
		votre navigateur. Toutefois, cela peut vous empêcher d'utiliser certaines fonctionnalités du
		site ou de naviguer efficacement.
	</p>
	<p>
		Pour en savoir plus sur les cookies et la manière de les gérer, consultez la rubrique d'aide de
		votre navigateur ou visitez <a href="http://www.allaboutcookies.org/">www.allaboutcookies.org</a
		>.
	</p>
</div>

<style>
	.cookies {
		max-width: 800px;
		margin: 0 auto;
		padding: 40px;
		color: #333;
	}

	.cookies h1 {
		font-size: 32px;
		font-weight: bold;
		color: #333;
		text-align: center;
		margin-bottom: 30px;
	}

	.cookies p {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
		text-align: justify;
	}

	.cookies ul {
		list-style: none;
		padding: 0;
		margin: 30px 0;
	}

	.cookies ul li {
		font-size: 16px;
		line-height: 1.5;
		color: #333;
		margin-bottom: 10px;
	}

	.cookies a {
		color: #0077c2;
		text-decoration: none;
		font-weight: bold;
	}

	.cookies a:hover {
		text-decoration: underline;
	}
</style>
