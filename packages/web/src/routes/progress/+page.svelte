<script lang="ts">
	let { data } = $props();
</script>

<div class="flex flex-col items-center p-4">
	<div class="w-full max-w-4xl flex justify-center gap-8 items-center mt-4 mb-8">
		<h1 class="font-bold text-2xl">
			Tasks ({data.tasks.length})
		</h1>
		<a href="/progress/create">
			<button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
				Create
			</button>
		</a>
	</div>

	{#if data.tasks.length > 0}
		<div class="overflow-x-auto w-full">
			<table class="min-w-full bg-white border border-gray-200">
				<thead>
					<tr class="bg-gray-100">
						<th class="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Name</th>
						<th class="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Type</th>
						<th class="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700"
							>Progress</th
						>
						<th class="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Actions</th
						>
					</tr>
				</thead>
				<tbody>
					{#each data.tasks as task, index}
						<tr class="{index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-200">
							<td class="px-6 py-2 border-b">
								<a href={`/progress/${task.id}`} class="text-blue-500 hover:underline">
									{task.name}
								</a>
							</td>
							<td class="px-6 py-2 border-b">
								<a href={`/progress/${task.id}`} class="text-blue-500 hover:underline">
									{task.type}
								</a>
							</td>

							<td class="px-6 py-2 border-b">
								{task.progress}%
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
