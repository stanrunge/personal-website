<script lang="ts">
	let { data } = $props();

	let searchTerm = $state('');
	let filteredTasks = $derived(
		data.tasks.filter(
			(task) =>
				task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				task.tasksToTopics.some((t) =>
					t.topic.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
		)
	);
</script>

<div class="flex flex-col items-center p-4">
	<div class="w-full max-w-4xl flex flex-col gap-4 items-center mt-4 mb-8">
		<div class="flex justify-center gap-8">
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
		<!-- Search Bar -->
		<div class="w-full max-w-md">
			<input
				type="text"
				bind:value={searchTerm}
				placeholder="Search tasks or topics..."
				class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
		Total progress: {data.tasks.reduce((acc, task) => acc + task.currentPoints, 0)} / {data.tasks.reduce(
			(acc, task) => acc + task.totalPoints,
			0
		)} ({(
			(data.tasks.reduce((acc, task) => acc + task.currentPoints, 0) /
				data.tasks.reduce((acc, task) => acc + task.totalPoints, 0)) *
			100
		).toFixed(3)}%)
	</div>

	{#if filteredTasks.length > 0}
		<div class="overflow-x-auto w-full">
			<!-- Desktop Table View -->
			<div class="hidden md:block">
				<table class="min-w-full">
					<thead>
						<tr class="border-b border-white">
							<th class="px-6 py-3 text-left text-sm font-semibold">Name</th>
							<th class="px-6 py-3 text-left text-sm font-semibold">Topics</th>
							<th class="px-6 py-3 text-left text-sm font-semibold min-w-[200px]">Progress</th>
						</tr>
					</thead>
					<tbody>
						{#each filteredTasks as task, index}
							<tr class="{index % 2 === 0 ? 'bg-black' : 'bg-gray-950'} hover:bg-gray-800">
								<td class="px-6 py-2 border-b">
									<a href={`/progress/${task.id}`} class="text-blue-500 hover:underline">
										{index + 1}. {task.name}
									</a>
								</td>
								<td class="px-6 py-2 border-b">
									<a href={`/progress/${task.id}`} class="flex gap-2 flex-wrap">
										{#each task.tasksToTopics as topic}
											<div
												class="relative bg-blue-500 text-white rounded-full px-2 py-1 shadow font-medium hover:bg-blue-600 transition cursor-pointer"
												title="Click for more details about {topic.topic.name}"
											>
												{topic.topic.name}
											</div>
										{/each}
									</a>
								</td>
								<td class="px-6 py-2 border-b min-w-[200px]">
									<div class="relative w-full h-6 bg-gray-700 rounded-full overflow-hidden">
										<div
											class="absolute h-full bg-green-500"
											style="width: {(task.currentPoints / task.totalPoints) * 100}%"
										></div>
										<span class="absolute inset-0 flex items-center justify-center text-sm">
											{task.currentPoints} / {task.totalPoints} ({(
												(task.currentPoints / task.totalPoints) *
												100
											).toFixed(1)}%)
										</span>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<!-- Mobile Card View -->
			<div class="md:hidden space-y-4">
				{#each filteredTasks as task}
					<div class="bg-gray-800 rounded-lg p-2 w-full">
						<a
							href={`/progress/${task.id}`}
							class="text-blue-500 hover:underline text-lg font-bold"
						>
							{task.name}
						</a>
						<div class="mt-1">
							<div class="mb-1"></div>
							<span class="font-medium">Topics:</span>
							<div class="flex flex-wrap gap-1 mt-1">
								{#each task.tasksToTopics as topic}
									<div
										class="bg-blue-500 text-white rounded-full px-2 py-1 shadow font-medium hover:bg-blue-600 transition cursor-pointer"
										title="Click for more details about {topic.topic.name}"
									>
										{topic.topic.name}
									</div>
								{/each}
							</div>
						</div>
						<div class="w-full h-4 bg-gray-700 rounded-full relative overflow-hidden">
							<div
								class="absolute h-full bg-green-500"
								style="width: {(task.currentPoints / task.totalPoints) * 100}%"
							></div>
							<span class="absolute inset-0 flex items-center justify-center text-xs">
								{task.currentPoints} / {task.totalPoints} ({(
									(task.currentPoints / task.totalPoints) *
									100
								).toFixed(1)}%)
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<p class="text-gray-500">
			No tasks found matching your search. Try a different keyword or clear the search.
		</p>
	{/if}
</div>
