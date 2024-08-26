<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Apod from './Nasa_APOD.svelte';
	
</script>

<div class="embla flex justify-center items-center" use:emblaCarouselSvelte>
	<div class="embla__container">
		<div class="embla__slide"><Apod /></div>
		<div class="embla__slide">asd</div>
		<div class="embla__slide">asd</div>
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
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
