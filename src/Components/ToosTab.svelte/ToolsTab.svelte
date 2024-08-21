<script>
	import { goto } from '$app/navigation';

	function goTo() {
		goto('/nasa-apod');
	}
</script>

<div>
	<ul class="text-xl p-2">
		<button
			on:click={goTo}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			NASA APOD
		</button>
		<button class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded">
			SVELTE
		</button>
		<button class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded">
			REACT
		</button>
		<button class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded">
			JAVASCRIPT
		</button>
		<button class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded">
			CSS3
		</button>
		<button class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded">
			HTML5
		</button>
	</ul>
</div>
