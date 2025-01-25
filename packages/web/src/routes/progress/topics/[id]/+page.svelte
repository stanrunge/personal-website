<script lang="ts">
	let { data } = $props();
</script>

<h1 class="my-4 text-2xl font-bold text-center">{data.topic.name}</h1>

<h2 class="text-xl font-bold">Tasks ({data.topic?.topicsToTasks.length})</h2>
{#each data.topic?.topicsToTasks as task}
	<div class="flex gap-4 items-center relative">
		<a href="/progress/{task.task.id}" class="text-lg font-semibold hover:underline"
			>{task.task.name}</a
		>
	</div>
{/each}
