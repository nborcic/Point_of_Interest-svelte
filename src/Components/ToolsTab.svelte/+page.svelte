<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col justify-center items-center">
	<ul class="text-xl p-2">
		<button
			on:click={() => goto('/nasa-apod')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			NASA APOD
		</button>
		<button
			on:click={() => goto('/svelte')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			SVELTE
		</button>
		<button
			on:click={() => goto('/react')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			REACT
		</button>
		<button
			on:click={() => goto('/js')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			JAVASCRIPT
		</button>
		<button
			on:click={() => goto('/css')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			CSS3
		</button>
		<button
			on:click={() => goto('/html')}
			class="bg-black hover:bg-black-800 text-white font-bold py-2 px-4 rounded"
		>
			HTML5
		</button>
	</ul>
</div>
