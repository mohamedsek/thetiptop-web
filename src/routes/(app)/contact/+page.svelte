<svelte:head>
	<title>ThéTipTop - Nous Contacter</title>
	<meta name="description" content="Contactez ThéTipTop pour toutes vos questions ou préoccupations concernant nos gammes de thés de grande qualité, nos mélanges signatures exclusifs, des thés détox, des thés blancs, des thés aux légumes et des infusions. Tous nos thés sont bios et Handmades. Notre équipe est à votre disposition pour vous aider à choisir le thé parfait pour vous ou pour répondre à toute autre question que vous pourriez avoir. Contactez-nous dès maintenant pour découvrir comment ThéTipTop peut vous offrir une expérience de dégustation de thé unique." />
</svelte:head>

<div class="container mt-5 ">
	<h1>Contactez-nous</h1>
	<p>Remplissez le formulaire ci-dessous pour nous envoyer un message.</p>
	<form class="contact-wrapper">
		<div class="form-group">
			<label for="name">Nom</label>
			<input type="text" class="form-control" id="name" placeholder="Entrez votre nom" required />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input
				type="email"
				class="form-control"
				id="email"
				placeholder="Entrez votre email"
				required
			/>
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea
				class="form-control"
				id="message"
				rows="5"
				placeholder="Entrez votre message"
				required
			/>
		</div>
		<button type="submit" class="btn mt-4">Envoyer</button>
	</form>
</div>

<style>
	.contact-wrapper button {
		background-color: #00aa88;
    color: #fff;
	}
</style>
