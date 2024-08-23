
import { loadStoredData, saveDataSmallSave } from '$lib/storage.js';
export async function load({ fetch }) {

	const url = "https://api.nasa.gov/planetary/apod?api_key=XU1veLH7PKJnA7br9yBkO357voaKBFZmmf0hTLio";

	const today = new Date().toISOString().split('T')[0];
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch APOD data');
		}
		const apod = await response.json();


		saveDataSmallSave(apod);

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

