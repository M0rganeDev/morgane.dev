<script>
	let header = [
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
        background: black;
        width: 100%;
        box-sizing: border-box;
		border-bottom: .3rem solid white;
	}
	.header-child {
        display: inline-flex;
        align-items: center;
        padding-left: 10%;
	}
</style>
<header class="header">
	{#each header as page}
			<a href="{page.url}"><h3 class="header-child">{page.name}</h3></a>
	{/each}
</header>
