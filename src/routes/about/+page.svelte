<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ImageContainer from '$lib/ImageContainer.svelte';

	const birthdate = new Date("2004/2/1");
	const cur = new Date();
	const diff = cur - birthdate;
	const age = Math.floor(diff / 31557600000);
</script>

<Header/>

<div class="content">
	<h1>whoami</h1>
	<h3 class="child">
		Hi, I'm morgane, {age} years old. I'm a non binary dev living in France.<br>I've been programming since I was 12 years old (in 2017).
		<br><br>
		Currently, I use <a href="https://nixos.org">NixOS</a>, a declarative linux distribution. My usual IDE is neovim, although I sometime use Jetbrain's free IDEs.
		This website is both a portfolio, and a way to throw my ideas and thought for everyone to see !
		<br><br>
		My languages :
	</h3>
	<center>
		<ImageContainer url="https://github-readme-stats.vercel.app/api/top-langs/?username=M0rganeDev&layout=pie&theme=radical&disable_animations=true"
						desc="My most used languages on github"
						redirect="https://github.com/M0rganeDev"
		/>
	</center>
	<br>
	<h1>My tools : </h1>
	<div class="content">
		<h3>This website exist thanks to those tools : </h3>
		<h4 class="child"><a href="https://svelte.dev/"> Svelte </a></h4>
		<h4 class="child"><a href="https://docker.com/"> Docker </a></h4>
		<h4 class="child"><a href="https://ovh.com"> OVH 󰒋</a></h4>
		<!--<h4 class="child"><a href="https://gitea.com/"> Gitea </a></h4> :( -->
		<h4 class="child"><a href="https://www.nerdfonts.com/"> NerdFont 󰛖</a></h4>
		<br>
		<h4>This website also tries to be accessible to people with dyslexia or color blindness</h4>
		<h4 class="child"><a href="https://github.com/M0rganeDev/morgane.dev"> Website's source code</a></h4>
	</div>
</div>

<Footer/>
