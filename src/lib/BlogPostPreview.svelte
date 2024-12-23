<script lang="ts">
	// Define props for the component
	export let title: string;
	export let description: string;
	export let publishedDate: string;
	export let lastEdited: string;
</script>

<style>
    .preview
	{
		padding-left: 1rem;
        border: .5rem double darkslategray;
    }

	.extra-padding
	{
        padding-left: 2rem;
        padding-right: 2rem;
	}
</style>

<div class="extra-padding">
	<div class="preview">
		<a href="/blog/{title.replaceAll(' ', '-')}"><h1>{title}</h1></a>
		<h3>
			Published: {publishedDate}
			{#if !lastEdited.match("null")}
				| Last Edited: {lastEdited}
			{/if}
		</h3>
		<p>{description}</p>
	</div>
</div>
