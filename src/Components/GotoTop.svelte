<script>
</script>

<button class="goto__top" on:click={() => window.scrollTo(0, 0)}>↑</button>

<style>
	.goto__top {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		cursor: pointer;
		color: #999;
		border-radius: 0.15rem;
		transition-duration: 300ms;
		z-index: 999;
		background: none;
		border: none;
		padding: 0;
	}
	.goto__top:hover {
		transform: translateY(-10px);
	}
</style>
