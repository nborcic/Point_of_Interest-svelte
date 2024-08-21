export async function load({ fetch }) {
	const apiKey = import.meta.env.VITE_NASA_API_KEY;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch APOD data');
		}
		const apod = await response.json();


		return {
			props: {
				apod,
				error: null
			}
		};
	} catch (err) {
		return {
			props: {
				apod: null,
				error: err.message
			}
		};
	}
}

