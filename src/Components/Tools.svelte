<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col justify-center items-center">
	<ul class="text-xl p-2">
		<button
			on:click={() => goto('/')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			HOME
		</button>
		<button
			on:click={() => goto('/nasa-apod')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			NASA APOD
		</button>
		<button
			on:click={() => goto('/svelte')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			SVELTE
		</button>
		<button
			on:click={() => goto('/react')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			REACT
		</button>
		<button
			on:click={() => goto('/js')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			JAVASCRIPT
		</button>
		<button
			on:click={() => goto('/css')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			CSS3
		</button>
		<button
			on:click={() => goto('/html')}
			class=" text-black shadow-md hover:bg-[rgb(0,0,0)] hover:text-white font-bold py-2 px-4 rounded"
		>
			HTML5
		</button>
		<button
			on:click={() => goto('/StorageData')}
			class=" text-black shadow-md font-bold py-2 px-4 rounded"
			disabled={true}
		>
			Storage Data
		</button>
	</ul>
</div>
