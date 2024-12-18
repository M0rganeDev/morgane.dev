<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
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

<h1 class="content">Welcome to my website !</h1>

<div class="content">
	<h3 class="child">Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra vehicula condimentum vivamus turpis vulputate? Adipiscing pharetra diam nibh vestibulum, aptent proin. Sed mattis luctus magna cursus quis et. Aenean porta facilisis ad nostra; nullam turpis velit nascetur. Netus litora amet ligula enim habitant mauris lacus. Sed pellentesque platea iaculis dictumst torquent lacus primis. Semper tristique volutpat, vitae habitant vulputate lectus egestas lectus dolor. Rutrum neque taciti nisl volutpat magna natoque mi volutpat primis. Maecenas bibendum maximus posuere fringilla dictum mus congue.</h3>
	<h2 class="child">Latest blog post : </h2>
	<BlogPostPreview title="Title With Spaces" description="test description" publishedDate="today" lastEdited="null"></BlogPostPreview>
</div>
<Footer/>
