<!-- <script>
	import { loadStoredDataa } from '../../lib/storage.js';
	import { onMount } from 'svelte';

	let data = [];
	let error = null;

	const loadData = async () => {
		try {
			data = await loadStoredDataa();
			error = null;
			console.log(data, 'data loaded');
		} catch (err) {
			error = 'Failed to load data';
			console.error(err);
		}
	};

	onMount(loadData, 'loadData');
	console.log(data);
</script>

<main>
	<h1>Stored Data</h1>

	{#if error}
		<p style="color: red;">{error}</p>
	{:else if data.length === 0}
		<p>No data available.</p>
	{:else}
		<ul>
			{#each data as item}
				<li>{item.title}</li>
			{/each}
		</ul>
	{/if}

	<button on:click={loadData}>Reload Data</button>
</main>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		padding: 0.5rem;
		border-bottom: 1px solid #ccc;
	}
	li:last-child {
		border-bottom: none;
	}
	button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	button:hover {
		background-color: #0056b3;
	}
</style> -->
