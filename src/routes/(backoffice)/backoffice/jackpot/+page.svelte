<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let Winner = null;
	let isLoading = false;
	let JackPot = data.JackPot;

	async function getWinner() {
		isLoading = true;
		console.log(JackPot);
		setTimeout(() => {
			Winner = JackPot;
			isLoading = false;
		}, 5000);
	}
	onMount(() => {
		console.log('Component mounted');
	});
</script>

<div class="winner">
	{#if Winner}
		{Winner.firstName}
		{Winner.lastName}
	{:else if isLoading}
		Loading ....
	{:else}
		<button type="button" class="btn btn-success" on:click={getWinner}>Gagnant du grand Lot</button>
	{/if}
</div>

<style>
	.winner {
		height: 200px; /* set the height of the container */
		align-items: center; /* center items vertically */
		display: flex;
		flex-direction: row;
		font-family: 'Poppins', sans-serif !important;
		font-weight: 400;
		font-size: 12ex;
		text-align: center;
	}
</style>
