<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/state';

	const error = page.error.message;
	const status = page.status;
</script>

<Header/>
<center>
	<br><br>
	{#if status === 404}
		<h1>This page does not exist :c</h1>
	{:else if (status === 500 || status === 502 || status === 503)}
		<h1>Something went wrong :c</h1>
	{/if}
	<h1>error message: {error}<br>(status code : {status})</h1>
</center>
<Footer/>
