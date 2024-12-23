<script>
	let header = [
		{ name: " ", url: "/"},
		{ name: "󱂵 /home", url: "/" },
		{ name: " /projects", url: "/projects" },
		{ name: " /blog", url: "/blog" },
		{ name: "󱅻 /about", url: "/about" },
	];
</script>

<style>
	.header {
        display: flex;
        justify-content: center;
        gap: clamp(1rem, 5vw, 10rem);
        background: #10151b;
        width: 100%;
        box-sizing: border-box;
		border-bottom: .3rem solid #6fc2ef;
	}
	.header-child {
        display: inline-flex;
        align-items: center;
	}
</style>
<header class="header">
	{#each header as page}
			<h2 class="header-child"><a href="{page.url}">{page.name}</a></h2>
	{/each}
</header>
