<script>
	import '../app.css';
	import Footer from '../Components/Footer.svelte';
	import Header from '../Components/Header.svelte';
</script>

<main class="flex flex-col justify-center items-center">
	<Header />
	<slot />
	<Footer />
</main>
