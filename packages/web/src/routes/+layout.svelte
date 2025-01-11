<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<nav class="flex justify-between bg-gray-200 items-center">
	<div class="m-4"><a href="/" class="font-bold text-2xl">Stan Runge</a></div>
	<div class="m-4 flex gap-4">
		<div>
			<a href="/progress">Progress</a>
		</div>
		<div>|</div>
		<div class="flex gap-2">
			<a href="https://x.com/stanrunge"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
					/></svg
				></a
			>
			<a href="https://x.com/stanrunge"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
					/></svg
				></a
			>
		</div>
	</div>
</nav>

{@render children?.()}
