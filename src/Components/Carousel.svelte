<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Apod from './Nasa_APOD.svelte';
	import Svelte from '$lib/svelte.svelte';
	import React from '$lib/react.svelte';
	import Photography from '../lib/Photography.svelte';
</script>

<div class="embla flex justify-center shadow-lg items-center" use:emblaCarouselSvelte>
	<div class="embla__container">
		<div class="embla__slide"><Apod /></div>
		<div class="embla__slide"><Svelte /></div>
		<div class="embla__slide"><React /></div>
	</div>
</div>

<div class="embla flex justify-center shadow-lg items-center" use:emblaCarouselSvelte>
	<div class="embla__container">
		<div class="embla__slide"><Photography /></div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		display: flex;
		flex-direction: column;
		flex: 0 0 100%;
		min-width: 0;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		max-width: 100%;
		justify-items: center;
		align-items: center;
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
</style>
