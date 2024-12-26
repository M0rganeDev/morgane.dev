<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

    export let data;
	import SvelteMarkdown from 'svelte-markdown'
	import { error } from '@sveltejs/kit';

	let source = "article not found";

	if (data.status !== 200)
		error(data.status, `${data.content}`);

	source = data.content;
</script>

<Header/>

{#if data.slug === "Title-With-Spaces"}
	<br><center><h1> test rendering markdown, please ignore </h1></center><br>
{/if}

<div class="content">
	<h1>{data.slug.replaceAll("-", " ")}</h1>
	<SvelteMarkdown {source} />
</div>

<Footer/>
