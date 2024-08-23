<script>
	export let data;
	export let error;

	const apod = data?.props?.apod;

	console.log(data);
</script>

<div class="flex flex-col justify-center items-center container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-4">Astronomy Picture of the Day</h1>

	{#if error}
		<p class="text-xl text-justify">Error: {error}</p>
	{:else if !apod}
		<p class="text-xl text-justify">Loading...</p>
	{:else}
		<div class="flex flex-col justify-center items-center">
			<h2 class="text-2xl font-semibold mb-2">{apod.title}</h2>
			<p class="text-sm text-gray-600 mb-2">{apod.date}</p>
			<p>{apod.media_type}</p>

			{#if apod.media_type === 'image'}
				<img
					src={apod.hdurl}
					alt={apod.title}
					class="rounded-lg shadow-md mb-4 w-[50vw] h-[40vh] hover:scale-[1.6]"
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
		max-width: 1280px;
	}
</style>
