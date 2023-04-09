<script>
	import caisseService from '$lib/services/caisseService.js';
	import { onMount } from 'svelte';

	export let props;
	export let gain;
    export let refreshUserGains=()=>{}
	let ticketCode = null;

	onMount(() => {
		if (gain?.ticketCode) {
			ticketCode = gain.ticketCode;
		}
		console.log(JSON.stringify(props));
	});

	async function usedTicket() {
		let message = await caisseService.usedTicket(props.accessToken, ticketCode);
		console.log(message);
        refreshUserGains();
	}
</script>

<tr>
	<td>{gain.ticketCode}</td>
	<td>{gain.gainTitle}</td>
	<td>{#if gain.isUsed}OUI{:else} En Attente{/if}</td>
	<td>{#if !gain.isUsed}<button class="btn btn-success" on:click={usedTicket} type="button">Valider remise</button>{/if}</td>
</tr>

<style>
</style>
