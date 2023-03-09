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
