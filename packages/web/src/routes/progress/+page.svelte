<script lang="ts">
	let { data } = $props();
</script>

<div class="flex flex-col items-center p-4">
	<div class="w-full max-w-4xl flex justify-center gap-8 items-center mt-4 mb-8">
		<h1 class="font-bold text-2xl">
			Tasks ({data.tasks.length})
		</h1>
		{#if data.editable}
			<a href="/progress/create">
				<button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
					Create
				</button>
			</a>
		{/if}
	</div>

	{#if data.tasks.length > 0}
		<div class="overflow-x-auto w-full">
			<table class="min-w-full">
				<thead>
					<tr class="border-b border-white">
						<th class="px-6 py-3 text-left text-sm font-semibold">Name</th>
						<th class="px-6 py-3 text-left text-sm font-semibold">Topics</th>
						<th class="px-6 py-3 text-left text-sm font-semibold">Progress</th>
						<th class="px-6 py-3 text-left text-sm font-semibold">Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each data.tasks as task, index}
						<tr class="{index % 2 === 0 ? 'bg-black' : 'bg-gray-950'} hover:bg-gray-800">
							<td class="px-6 py-2 border-b">
								<a href={`/progress/${task.id}`} class="text-blue-500 hover:underline">
									{task.name}
								</a>
							</td>
							<td class="px-6 py-2 border-b">
								<a href={`/progress/${task.id}`} class="flex gap-2 flex-wrap">
									{#each task.tasksToTopics as topic}
										<div
											class="relative bg-blue-500 text-white rounded-full px-2 py-1 shadow font-medium hover:bg-blue-600 transition cursor-pointer group"
											title="Click for more details about {topic.topic.name}"
										>
											{topic.topic.name}
										</div>
									{/each}
								</a>
							</td>

							<td class="px-6 py-2 border-b">
								{((task.currentPoints / task.totalPoints) * 100).toFixed(1)}%
							</td>
							<td class="px-6 py-2 border-b">
								<button
									onclick={() => {}}
									class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
									aria-label={`Delete task ${task.name}`}
								>
									Delete
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<p class="text-gray-500">No tasks available. Click "Create" to add a new task.</p>
	{/if}
</div>
