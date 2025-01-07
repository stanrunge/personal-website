<script lang="ts">
	let { data } = $props();
</script>

<div class="flex justify-center items-center">
	<h1 class="font-bold text-xl text-center m-4">Tasks ({data.tasks.length})</h1>
	<a href={'/progress/create'}>
		<button class="px-4 py-2 rounded bg-green-500">Create</button>
	</a>
</div>

<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Progress</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.tasks as task}
			<tr>
				<td>{task.id}</td>
				<td>{task.name}</td>
				<td>{task.progress}</td>
				<td><button>Delete</button></td>
			</tr>
		{/each}</tbody
	>
</table>
