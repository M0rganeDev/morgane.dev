<script>
	let footer = [
		{ name: " /credits", url: "/credits" },
		{ name: "󰮮 /source code", url: "/srcs" },
		{ name: " /git", url: "https://github.com/M0rganeDev" }
	];
</script>

<style>
    .footer {
        display: flex;
        justify-content: center;
        gap: 2rem;
        background: black;
        padding: 1rem;
        color: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        border-top: .3rem solid white;
    }
    .footer-child {
        display: inline-flex;
        align-items: center;
        padding: 0 1rem;
    }
</style>
<footer class="footer">
	{#each footer as page}
		<a href="{page.url}"><h2 class="footer-child">{page.name}</h2></a>
	{/each}
</footer>
