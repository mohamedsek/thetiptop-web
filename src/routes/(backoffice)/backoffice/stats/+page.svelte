<script>
	import { onMount } from 'svelte';
	import BarChart from './BarChart.svelte';
	import backOfficeService from '$lib/services/backOfficeService';

	/** @type {import('./$types').PageData} */
	export let data;

	let GainStats = data.GainStats;
	let chartData;
	let labels = [];
	let targetDistribution = [];
	let currentDistribution = [];

	onMount(async () => {
		GainStats = await backOfficeService.getGainStats(data.accessToken);
		console.log(GainStats);

		GainStats.forEach((element) => {
			console.log(element);
			labels.push(element.title);
			currentDistribution.push(element.currentDistribution);
			targetDistribution.push(element.targetDistribution);
		});
		chartData = {
			title: 'Statistiques',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'current Distribution',
						data: currentDistribution,
						backgroundColor: ['rgba(0, 128, 0, 0.5)'],
						borderColor: ['rgb(0, 128, 0)'],
						borderWidth: 1
					},
					{
						label: 'target Distribution',
						data: targetDistribution,
						backgroundColor: ['rgba(255, 153, 0, 0.5)'],
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
