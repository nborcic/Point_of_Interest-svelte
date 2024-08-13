<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import SetOne from './SetOne.svelte';
</script>

<div class="embla" use:emblaCarouselSvelte>
	<div class="embla__container">
		<div class="embla__slide"><SetOne /></div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
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
