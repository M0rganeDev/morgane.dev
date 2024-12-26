<link rel="stylesheet" href="../../../../../static/default.css">
<script lang="ts">
	import Header from '$lib/Header.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';

	export let data;
	let md_source: string = data.content;
	let tmp: string = md_source;

//	if(data.status !== 200)
//		error(data.status, {message: data.content})

	onMount(() => {
		autoResize();
	});

	// whether to show the live markdown rendering or not
	let display = true;
	// little hack to easily regen markdown
	let key = 0;

	function toggleDisplay()
	{
		display = !display;
		autoResize()
		if (display)
			reload()
	}

	async function savePost()
	{
		const request = {
			token: data.token,
			title: data.slug,
			content: `${md_source}`
		}

		try {
			const response = await fetch('/api/blog/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: `${JSON.stringify(request)}`,
			})
			const result = await response.text();
			if (response.ok)
				alert('File saved successfully!');
			else
				alert(`Error: ${result}`);
		}
		catch (error)
		{
			console.error('Error occurred while saving the file:', error);
			alert('Failed to save the file: ' + error);
		}
	}

	function reload() {
		md_source = tmp;
		autoResize()
		if (display)
			key += 1;
	}

	function autoResize() {
		const textarea = document.querySelector('textarea');
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}


</script>

<style>
    table {
        width: 100%;
        height: 100vh;
    }

    th {
        width: 50%;
        vertical-align: top;
    }

    textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #ccc;
        resize: none;
		background-color: #1d1f21;
		color: #b7b8b9;
        font-family: "OpenDyslexic Nerd Font", monospace;
        font-size: clamp(0.25rem, 2.5vw, 1rem);
    }

    #markdown-container {
		padding-left: 1.5rem;
        text-align: left; /* Ensures content aligns to the left */
        box-sizing: border-box;
    }

    #markdown-container > :global(*) {
        margin: 0; /* Removes potential margins from the markdown content */
        padding: 0;
        text-align: left; /* Enforces left alignment for child elements */
    }
</style>

<Header />
<table style="width: 100%; height: 50px;">
	<thead>
		<tr>
			<th><button on:click={() => {toggleDisplay(); autoResize()}} style="width: 100%; height: 100%">Toggle markdown display</button></th>
			<th><button on:click={savePost} style="width: 100%; height: 100%" >Save post</button></th>
		</tr>
	</thead>
</table>
{#if display}
	<table style="width: 100%; height: 50px;">
		<thead>
		<tr>
			<th><h1>Editor</h1></th>
			<th><h1>Preview</h1></th>
		</tr>
		</thead>
	</table>
	<table>
		<thead>
			<tr>
				<th>
				<textarea
					bind:value={tmp}
					on:input={() => { reload(); autoResize(); }}
					style="height: auto;overflow:hidden"
					></textarea>
				</th>
				<th>
					<div id="markdown-container">
						{#key key}
							<SvelteMarkdown source={md_source} />
						{/key}
					</div>
				</th>
			</tr>
		</thead>
	</table>
{:else}
<textarea
	bind:value={tmp}
	on:input={() => { reload(); autoResize(); }}
	style="height: auto;overflow:hidden"
></textarea>
{/if}