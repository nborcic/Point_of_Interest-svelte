
export async function load({ fetch }) {

	const url = "";

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch APOD data');
		}
		const news = await response.json();

		return {
			props: {
				news,
				error: null
			}
		};
	} catch (err) {
		return {
			props: {
				news: null,
				error: err.message
			}
		};
	}


}

