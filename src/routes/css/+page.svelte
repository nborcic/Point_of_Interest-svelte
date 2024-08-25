<script>
	import { onMount } from 'svelte';

	let articles = [];

	onMount(async () => {
		const response = await fetch(
			'https://newsapi.org/v2/everything?q=html5&apiKey=e7b7fd80ee584b44b25181e6847abd81'
		);
		const data = await response.json();
		articles = data.articles;
	});
</script>

<h1 class="text-4xl">SvelteKit Web Development News</h1>
<div class="news-container">
	{#each articles as article}
		<div class="news-article">
			<img src={article.urlToImage || 'https://via.placeholder.com/300x150'} alt={article.title} />
			<h2><a href={article.url} target="_blank">{article.title}</a></h2>
			<p>{article.description}</p>
		</div>
	{/each}
</div>

<style>
	.news-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 20px;
	}
	.news-article {
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin: 15px;
		width: 300px;
		padding: 15px;
		text-align: left;
	}
	.news-article img {
		max-width: 100%;
		border-radius: 5px;
	}
	.news-article h2 {
		font-size: 18px;
		color: #007bff;
	}
	.news-article p {
		font-size: 14px;
		color: #555;
	}
	.news-article a {
		text-decoration: none;
		color: #007bff;
	}
</style>
