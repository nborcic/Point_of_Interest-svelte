<script>
	let headerText = 'Welcome to my Point of Interest';
	let subtitle = 'Exploring the world of Interest';
	let author = 'John Dou';
	let date = new Date().toLocaleDateString();
</script>

<div class="header bg-[#f2f2f2] text-center">
	<h1 class="text-[34px] mb-[10px]">{headerText}</h1>
	<h2 class="text-[16px] mb-[10px]">{subtitle}</h2>
	<div class="text-[16px] text-[#666]">
		<p>Author: {author}</p>
		<p>Date: {date}</p>
	</div>
</div>
