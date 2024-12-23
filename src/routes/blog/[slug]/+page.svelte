<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

    export let data;
	import SvelteMarkdown from 'svelte-markdown'

	let source = "article not found";
	let found = false;
	if (data.slug == "Title-With-Spaces")
	{
		found = true;
		source = `
# This is a header

***

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside`
	}
</script>

<Header/>

{#if found}
	{#if data.slug === "Title-With-Spaces"}
		<br><center><h1> test rendering markdown, please ignore </h1></center><br>
	{/if}

	<div class="content">
		<h1>{data.slug.replaceAll("-", " ")}</h1>
		<SvelteMarkdown {source} />
	</div>

{:else}
	<h1 class="child">This article could not be found</h1>
{/if}

<Footer/>
