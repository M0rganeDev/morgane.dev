<script lang="ts">
	export let url: string;
	export let desc: string | null = null;
	export let redirect: string | null = null;
</script>

<style>

</style>

<center>
	<img src="{url}" alt="{desc}"/>
	<p>
		{#if redirect != null}
			<a href="{redirect}">
			<i>{desc}</i>
			</a>
		{:else }
			{desc}
		{/if}
	</p>
</center>
