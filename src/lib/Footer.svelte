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
        gap: clamp(1rem, 5vw, 10rem);
        background: black;
        color: white;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: .125rem 0;
        box-sizing: border-box;
        border-top: .3rem solid white;
    }

    .footer-child {
        display: inline-flex;
        align-items: center;
        padding: 1rem;
    }
</style>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<!--
<footer class="footer">
	{#each footer as page}
		<a href="{page.url}"><h3 class="footer-child">{page.name}</h3></a>
	{/each}
</footer>
-->
