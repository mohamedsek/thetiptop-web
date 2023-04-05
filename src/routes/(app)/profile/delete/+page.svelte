<script>
	import { apiClient } from '$services/apiClient';
	export let data;
	async function deleteAccount() {
		await apiClient.delete(`${import.meta.env.VITE_API_BASE_URL}/users/${data.user.uid}`, {
			token: data.accessToken
		});
		window.location.href = '/auth/logout';
	}
</script>

<svelte:head>
	<title>Modifier mot de passe</title>
	<meta name="description" content="DeleteAccount Page" />
</svelte:head>

<h1 class="text-center fw-bold fs-3 mb-4">Supprimer mon compte</h1>
<div class="btn-wrapper d-flex justify-content-center mb-4">
	<button on:click={deleteAccount} type="submit" class="btn-submit me-4 ">
		confirmer la suppression
	</button>
</div>

<style>
	.btn-submit {
		background-color: #00aa88;
		color: #fff;
		padding: 5px 20px;
		border-radius: 15px;
		font-weight: 600;
		border: none;
		text-align: center;
	}
</style>
