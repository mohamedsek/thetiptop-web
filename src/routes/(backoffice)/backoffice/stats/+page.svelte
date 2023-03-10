<script>
	import { onMount } from 'svelte';
	import BarChart from './BarChart.svelte';

	let DistData;
	let chartData;
	let labels = [];
	let targetDistribution = [];
	let currentDistribution = [];
	onMount(async () => {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/gains/stats`);
		console.log(response);

		DistData = await response.json();
		console.log(DistData);

		DistData.forEach((element) => {
			console.log(element);
			labels.push(element.title);
			currentDistribution.push(element.currentDistribution);
			targetDistribution.push(element.targetDistribution);
		});
		chartData = {title:"Statistiques",
			data: {
				labels: labels,
				datasets: [
					{
						label: 'current Distribution',
						data: currentDistribution,
						backgroundColor: ['rgba(201, 203, 207, 0.5)'],
						borderColor: ['rgb(201, 203, 207)'],
						borderWidth: 1
					},
					{
						label: 'target Distribution',
						data: targetDistribution,
						backgroundColor: ['rgba(255, 99, 132, 0.5)'],
						borderColor: ['rgb(255, 99, 132)'],
						borderWidth: 1
					}
				]
			}
		};
	});
</script>

{#if chartData}
<div class="stats">
	<BarChart {chartData} />
</div>
	
{/if}

<style>
	.stats {
		display: flex;
		flex-direction: column;
	}
</style>