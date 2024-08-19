<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    let items = [];
    let error = null;

    const fetchData = async () => {
        const url = 'https://api.nasa.gov/techtransfer/patent/?engine&api_key=XU1veLH7PKJnA7br9yBkO357voaKBFZmmf0hTLio';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (data && data.results) {
                items = data.results; // Safely assign the results to items
            } else {
                error = 'No data available';
            }
        } catch (err) {
            error = err.message;
        }
    };

    onMount(() => {
        if (browser) {
            fetchData();
        }
    });
</script>


<div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">NASA Patent Technologies</h1>

    {#if error}
        <p class="text-red-500">{error}</p>
    {:else if items.length === 0}
        <p>Loading...</p>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each items as item}
                <div class="border p-4 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold mb-2">{item[2].replace(/<\/?span[^>]*>/g, '')}</h2>
                    <p class="mb-4">{item[3].replace(/<\/?span[^>]*>/g, '')}</p>
                    {#if item[10]}
                        <img src={item[10]} alt={item[2].replace(/<\/?span[^>]*>/g, '')} class="rounded-lg shadow-md max-w-full h-auto" />
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
</div>