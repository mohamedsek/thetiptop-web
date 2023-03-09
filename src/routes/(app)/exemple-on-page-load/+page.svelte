<script>
	export let data;
</script>

<div class="container">
	<p class="exemple">data : {data.accessToken}</p>
	{#if data?.greetingMessage}
		<p>
			{data.greetingMessage}
		</p>
	{/if}
</div>
