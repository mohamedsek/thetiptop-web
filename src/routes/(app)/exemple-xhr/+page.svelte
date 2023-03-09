<script>
	import { apiClient } from '$services/apiClient';

	let greetingMessage;
	async function greetingFromServer() {
		const response = await apiClient.get(`${import.meta.env.VITE_API_BASE_URL}/hello`, {
			token: data.accessToken
		});
		greetingMessage = response.greeting;
	}
	export let data;
</script>

<div class="container">
	<p class="exemple">data : {data.accessToken}</p>
	<button on:click={greetingFromServer}>call api</button>
	{#if greetingMessage}
		<p>
			{greetingMessage}
		</p>
	{/if}
</div>
