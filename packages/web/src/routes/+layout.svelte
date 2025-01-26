<script lang="ts">
	import { enhance } from '$app/forms';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	interface Props {
		children?: import('svelte').Snippet;
	}
	const { children }: Props = $props();

	let editModalVisible = $state(false);
</script>

<div
	class="min-h-screen bg-black text-white bg-center bg-[url('/moon.jpg')] bg-auto bg-no-repeat flex flex-col"
>
	<nav class="flex justify-between bg-gray-800 items-center px-4 py-2">
		<div class="m-2">
			<a href="/" class="font-bold text-xl sm:text-2xl">Stan Runge</a>
		</div>
		<div class="m-2 flex gap-4 items-center">
			<a href="/progress" class="hover:underline">Progress</a>
			<span>|</span>
			<div class="flex gap-2 items-center">
				<a href="mailto:stan@stanrunge.dev" class="hover:text-gray-300" aria-label="Mail">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
						/>
					</svg>
				</a>
				<a href="https://github.com/stanrunge" class="hover:text-gray-300" aria-label="GitHub">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34
                               c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83
                               c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64
                               c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02
                               c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21
                               c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
						/>
					</svg>
				</a>
				<a href="https://x.com/stanrunge" class="hover:text-gray-300" aria-label="X">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102
                               l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
						/>
					</svg>
				</a>
				<a
					href="https://linkedin.com/in/stanrunge"
					class="hover:text-gray-300"
					aria-label="LinkedIn"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3
                               a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1
                               1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69
                               1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</nav>

	<!-- page content goes here -->
	<main class="mx-auto py-8 px-4 max-w-5xl flex-grow">
		<ModeWatcher />
		{@render children?.()}
	</main>

	<div class="flex justify-end">
		<button
			class="p-3 rounded border border-white m-4"
			onclick={() => (editModalVisible = !editModalVisible)}>Edit</button
		>
	</div>
</div>

{#if editModalVisible}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
		onclick={() => (editModalVisible = false)}
	>
		<form
			class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center"
			onclick={(e) => e.stopPropagation()}
			action="/?/authenticate"
			method="post"
		>
			<h2 class="text-lg font-semibold m-4 text-black">WHO ARE YOU?!?!?!??!</h2>
			<input type="text" class="border border-black rounded my-4" name="token" />
			<button class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
				Authenticate
			</button>
		</form>
	</div>
{/if}
