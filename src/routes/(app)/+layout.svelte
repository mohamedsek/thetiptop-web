<script>
	import '$lib/css/reset.css';
	import '$lib/css/normalize.css';
	import CookiePolicy from '../../lib/components/CookiePolicy/CookiePolicy.svelte';
	// import 'bootstrap/dist/js/bootstrap.min.js';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '$lib/css/app-styles.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Analytics from '../../lib/components/Analytics.svelte';

	export let data;
</script>

<div class="app">
	<Analytics />
	<Header props={data}/>
	<main>
		<slot />
	</main>
	<CookiePolicy/>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
