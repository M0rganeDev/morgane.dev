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
        gap: 2rem;
        background: black;
        width: 100%;
        box-sizing: border-box;
		border-bottom: .3rem solid white;
	}
	.header-child {
        display: inline-flex;
        align-items: center;
        padding-left: 1rem;
	}
</style>
<header class="header">
	{#each header as page}
			<a href="{page.url}"><h2 class="header-child">{page.name}</h2></a>
	{/each}
</header>
