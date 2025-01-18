<script lang="ts">
	let { data } = $props();

	let addTopicsDropdownShown = $state(false);
</script>

<h1 class="my-4 text-2xl font-bold text-center">{data.task?.name}</h1>

<div class="my-4">
	<div class="flex justify-center gap-4 items-center relative">
		<h2 class="text-xl font-semibold">topics ({data.task?.tasksToTopics.length})</h2>
		<div class="relative">
			<button
				class="px-2 py-1 rounded bg-green-500 text-white font-medium shadow"
				onclick={() => (addTopicsDropdownShown = !addTopicsDropdownShown)}
			>
				+
			</button>
			{#if addTopicsDropdownShown}
				<form
					method="post"
					action="?/addTopic"
					class="absolute mt-2 rounded-xl bg-gray-100 p-2 shadow-md items-center flex flex-col"
				>
					<select name="topic-id" class="rounded p-2 border border-gray-300 my-2" required>
						<option value="" disabled selected>select a topic</option>
						{#each data.topics as topic}
							{#if !data.task?.tasksToTopics.some((t) => t.topicId === topic.id)}
								<option value={topic.id}>{topic.name}</option>
							{/if}
						{/each}
					</select>
					<button
						type="submit"
						class="ml-2 px-2 py-1 rounded bg-blue-500 text-white font-medium shadow"
					>
						Add
					</button>
				</form>
			{/if}
		</div>
	</div>

	<div class="flex justify-center flex-wrap gap-2 my-1">
		{#if data.task?.tasksToTopics}
			{#each data.task?.tasksToTopics as topic}
				<div
					class="bg-blue-500 text-white rounded-full px-2 py-1 shadow font-medium hover:bg-blue-600 transition cursor-pointer"
					title="Click for more details about {topic.topic.name}"
				>
					{topic.topic.name}
				</div>
			{/each}
		{/if}
	</div>
</div>
