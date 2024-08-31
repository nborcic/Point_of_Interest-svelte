<script>
	import { goto } from '$app/navigation';
	import '../app.css';
	import Footer from '../Components/Footer.svelte';
	import Header from '../Components/Header.svelte';
</script>

<main class="flex flex-col justify-center items-center">
	<Header />

	<slot />
	<button
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed right-10 bottom-20 text-2xl text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
	>
		Up &#x2191;
	</button>
	<button
		data-sveltekit-reload
		href="/"
		on:click={() => goto('/')}
		class="fixed right-[5.5em] bottom-20 text-2xl text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
	>
		&#x2190; &#x2191; Home
	</button>
	<Footer />
</main>
