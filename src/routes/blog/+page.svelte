<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
		import BlogPostPreview from '$lib/BlogPostPreview.svelte';
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
	<h1>This page is under construction</h1>
	<BlogPostPreview title="Title With Spaces" description="test description" publishedDate="today" lastEdited="null"/>
</div>
<Footer/>
