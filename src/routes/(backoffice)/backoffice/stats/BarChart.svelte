<!-- BarChart.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';

	export let chartData;

	let chart;

	onMount(() => {
		const ctx = document.getElementById('myChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: chartData.data,
			options: chartData.options
		});
	});

	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<canvas id="myChart"/>
