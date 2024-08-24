export async function load({ fetch }) {

	try {
		const response = await fetch(
			'https://newsapi.org/v2/everything?q=sveltekit&apiKey=e7b7fd80ee584b44b25181e6847abd81');
		if (!response.ok) {
			throw new Error('Failed to fetch APOD data');
		}
		const svelte = await response.json();

		return {
			props: {
				svelte,
				error: null
			}
		};
	} catch (err) {
		return {
			props: {
				svelte: null,
				error: err.message
			}
		};
	}


}

