<script lang="ts">
	let { data } = $props();
</script>

<h1 class="my-4 text-2xl font-bold text-center">{data.task?.name}</h1>

<h2>Topics ({data.task?.tasksToTopics.length})</h2>
{#if data.task?.tasksToTopics}
	{#each data.task?.tasksToTopics as topic}
		<div class="rounded px-4 py-2 bg-gray-300">
			{topic.topicId}
		</div>
	{/each}
{/if}
