<script lang="ts">
	let { data } = $props();
</script>

<h1 class="font-bold text-xl text-center m-4">Tasks ({data.tasks.length})</h1>
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
				<td></td>
				<td></td>
				<td></td>
				<td><button>Delete</button></td>
			</tr>
		{/each}</tbody
	>
</table>
