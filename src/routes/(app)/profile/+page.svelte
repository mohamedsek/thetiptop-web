<script>
	export let data;
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="main-title row text-center"><h1>Mon compte</h1></div>
<div class="row">
	<div class="profil col-md-7 col-sm-12 ps-lg-5 order-md-2 text-md-start text-center mb-5">
		<h3 class="mb-4">INFORMATIONS</h3>
		<p>Nom : {data.user.lastName}</p>
		<p>Prénom : {data.user.firstName}</p>
		<p>Email : {data.user.email}</p>
	</div>
	<div class="profil-nav col-md-5 col-sm-12 text-md-start text-center  order-md-1">
		<ul class="list-group">
			<li class="list-group-item">
				<a href="/profile/info">Modifier mes informations</a>
			</li>
			<li class="list-group-item"><a href="profile/credentials">Modifier mot de passe</a></li>
			<li class="list-group-item"><a href="/profile/delete">Supprimer mon compte</a></li>
		</ul>
	</div>
</div>

<style>
	.main-title {
		margin-bottom: 4rem;
	}
	.profil-nav ul {
		list-style-type: none;
		color: black;
	}

	.profil-nav a {
		line-height: 3rem;
		text-decoration: none;
		color: black;
	}

	.profil-nav a:hover {
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}
</style>
