<script>
    import Footer from "$lib/components/backoffice/Footer.svelte";
    import Header from "$lib/components/backoffice/Header.svelte";
	import CookiePolicy from "$lib/components/CookiePolicy/CookiePolicy.svelte"
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '$lib/css/reset.css';
    import '$lib/css/normalize.css';
    import '$lib/css/app-styles.css';

	export let data;
</script>

<div class="backoffice">
	<Header props={data}/>
	<main>
		<slot />
	</main>
	<CookiePolicy/>
	<Footer />
</div>


<style>
	.backoffice {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>