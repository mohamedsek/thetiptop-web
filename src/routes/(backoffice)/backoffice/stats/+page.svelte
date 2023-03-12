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
	let totalParticipating;

	onMount(async () => {
		GainStats = await backOfficeService.getGainStats(data.accessToken);
		console.log(GainStats);

		GainStats.forEach((element) => {
			console.log(element);

			labels.push(element.title);
			currentDistribution.push(element.currentDistribution);
			targetDistribution.push(element.targetDistribution);
			totalParticipating = element.totalParticipating;
		});
		chartData = {
			type: 'bar',
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
	<div class="statstable">
		<table class="table table-striped .text-bg-success">
			<thead>
				<tr>
					<th scope="col">Gain</th>
					<th scope="col">Nombre de gagnant</th>
					<th scope="col">% actuel des gagnants</th>
					<th scope="col">% cible des gagnants</th>
				</tr>
			</thead>
			<tbody>
				{#each GainStats as gain}
					<tr>
						<th scope="row">{gain.title}</th>
						<td>{gain.numberOfParticipatingByGain}</td>
						<td>{gain.currentDistribution}</td>
						<td>{gain.targetDistribution}</td>
					</tr>
				{/each}
				<tr>
					<th>Total des clients participants</th>
					<th>{totalParticipating}</th>
				</tr>
			</tbody>
		</table>
	</div>
{/if}

<style>
	.stats {
		display: flex;
		flex-direction: column;
		margin-bottom: 100px;
		padding-bottom: 20px;
	}
	.statstable {
		margin: auto;
	}
</style>
