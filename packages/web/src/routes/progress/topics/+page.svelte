<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	let { data } = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Name</Table.Head>
			<Table.Head>Amount of Tasks</Table.Head>
			<Table.Head class="text-right">Actions</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.topics as topic}
			<Table.Row>
				<Table.Cell class="font-medium">{topic.name}</Table.Cell>
				<Table.Cell>{topic.topicsToTasks.length}</Table.Cell>

				<Table.Cell class="text-right"></Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
