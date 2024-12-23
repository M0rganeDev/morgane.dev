<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	const birthdate = new Date("2004/2/1");
	let cur = new Date();
	var diff = cur - birthdate;
	var age = Math.floor(diff/31557600000);
</script>

<Header/>

<div class="content">
	<h3 class="child">
		Hi, I'm morgane, {age} years old. I'm a non binary dev living in France.<br>I've been programming since I was 12 years old (in 2017).
		<br><br>
		Currently, I use <a href="https://nixos.org">NixOS</a>, a declarative linux distribution. My usual IDE is neovim, although I sometime use Jetbrain's free IDEs.
		This website is both a portfolio, and a way to throw my ideas and thought for everyone to see !
		<br><br>
		My languages :
	</h3>
	<center>
		<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=M0rganeDev&layout=pie&theme=radical&disable_animations=true" class="child" alt="Languages I use"/>
	</center>
</div>

<Footer/>
