<script>
	import caisseService from '$lib/services/caisseService.js';
	import Gain from '$lib/components/caisse/Gain.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let userGains = null;
	let username = null;
	let ticket = null;

	async function getUserGains() {
		userGains = await caisseService.getUserGains(data.accessToken, username);
	}

	async function getCode() {
		ticket = await caisseService.getCode(data.accessToken, {});
	}
</script>

<div class="container text-center">
	<div>
		<button class="btn btn-success" on:click={getCode} type="button">Generer un code</button>
		{#if ticket}
			<br />
			{ticket.code}
		{/if}
	</div>
	<div class="user">
		<label for="username">Entrer un nom d'utilisateur:</label>
		<input type="text" id="username" bind:value={username} />
		<button class="btn btn-success" on:click={getUserGains} type="button">Chercher</button>
	</div>
	{#if userGains}
		<table class="table table-striped .text-bg-success">
			<thead>
				<tr>
					<th scope="col">ticket</th>
					<th scope="col">gain</th>
					<th scope="col">Réclamé</th>
				</tr>
			</thead>
			<tbody>
				{#each userGains as gain}
					<Gain props={data} {gain} refreshUserGains={getUserGains} />
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<style>
	.user {
		height: 200px; /* set the height of the container */
		align-items: center; /* center items vertically */
		display: flex;
		flex-direction: row;
		font-family: 'Poppins', sans-serif !important;
		font-weight: 400;
		font-size: 2ex;
		text-align: center;
	}
</style>
