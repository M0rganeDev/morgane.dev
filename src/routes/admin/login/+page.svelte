<script lang="ts">
	import Header from '$lib/Header.svelte';
	let password_input: string;
</script>

<style>
	input {
		height: 50px;
		width: 50%;
        font-size: clamp(0.25rem, 2.5vw, 2rem);
	}
</style>

<Header />
<br>
<h1 class="child">Enter the admin password here :</h1>
<center>
	<form method="post" use:enhance>
		<input bind:value={password_input} type="password" name="password"/>
		<br>
		<br>
		<button type="submit">Validate</button>
	</form>
</center>
