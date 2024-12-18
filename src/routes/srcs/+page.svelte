<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<style>
	.content {
		padding-left: 2rem;
	}
    .child {
        padding-left: 2rem;
    }
</style>

<Header/>
<div class="content">
	<h1>This website exist thanks to those tools : </h1>
	<h2 class="child"><a href="https://svelte.dev/"> Svelte </a></h2>
	<h2 class="child"><a href="https://docker.com/"> Docker </a></h2>
	<h2 class="child"><a href="https://ovh.com"> OVH 󰒋</a></h2>
	<h2 class="child"><a href="https://gitea.com/"> Gitea </a></h2>
	<h2 class="child"><a href="https://www.nerdfonts.com/"> NerdFont 󰛖</a></h2>
	<br>
	<h2>This website also tries to be accessible to people with dyslexia or color blindness</h2>
	<h2 class="child"><a href="https://git.morgane.dev/Morgane/website"> Website's source code</a></h2>
</div>
<Footer/>
