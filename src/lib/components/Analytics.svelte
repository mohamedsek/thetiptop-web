<script lang="ts">
	import { page } from '$app/stores';
	import { gtag, install } from 'ga-gtag';

	$: {
		if (typeof gtag !== 'undefined' && typeof document !== 'undefined' && document.title && $page.url) {
			gtag('config', 'G-DZH531BC7Z', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-DZH531BC7Z">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-DZH531BC7Z');
	</script>
</svelte:head>
