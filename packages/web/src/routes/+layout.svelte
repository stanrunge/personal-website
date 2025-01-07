<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<nav class="flex justify-between bg-gray-200">
	<div class="m-4"><a href="/" class="font-bold text-2xl">Stan Runge</a></div>
	<div class="m-4 flex gap-4">
		<div>
			<a href="/progress">Progress</a>
		</div>
		<div>|</div>
		<div class="flex gap-2">
			<a href="https://x.com/stanrunge">X</a>
			<a href="https://x.com/stanrunge">YouTube</a>
			<a href="https://x.com/stanrunge">Twitch</a>
			<a href="https://x.com/stanrunge">Email</a>
			<a href="https://x.com/stanrunge">BlueSky</a>
		</div>
	</div>
</nav>

{@render children?.()}
