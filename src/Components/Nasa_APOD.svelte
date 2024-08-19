<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let apod = null; //async picture of the day
	let error = null;

	const fetchAPOD = async () => {
		const apiKey = import.meta.env.VITE_NASA_API_KEY;
		const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Failed to fetch APOD data');
			}
			apod = await response.json();
		} catch (err) {
			error = err.message;
		}
	};

	onMount(() => {
		if (browser) {
			fetchAPOD();
		}
	});
</script>

<div class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-4">Astronomy Picture of the Day</h1>

	{#if error}
		<p class="text-red-500">{error}</p>
	{:else if !apod}
		<p class="text-xl text-justify">Loading...</p>
	{:else}
		<div>
			<h2 class="text-2xl font-semibold mb-2">{apod.title}</h2>
			<p class="text-sm text-gray-600 mb-4">{apod.date}</p>
			{#if apod.media_type === 'image'}
				<img
					src={apod.hdurl}
					alt={apod.title}
					class="rounded-lg shadow-md mb-4 w-[50vw] h-[40vh] hover:scale-[1.5]"
				/>
			{:else if apod.media_type === 'video'}
				<div class="aspect-w-16 aspect-h-9 mb-4">
					<iframe
						title="APOD Video"
						src={apod.url}
						frameborder="0"
						allowfullscreen
						class="w-full h-[30vh] rounded-lg shadow-md"
					></iframe>
				</div>
			{/if}
			<p>{apod.explanation}</p>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 800px;
	}
</style>
