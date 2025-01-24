<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';

	let { data } = $props();

	let open = $state(false);
	let value = $state('');
	let search = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);
	let addTopicForms = $state<HTMLFormElement[]>([]);

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<h1 class="my-4 text-2xl font-bold text-center">{data.task?.name}</h1>

<div class="my-4">
	<div class="flex justify-center gap-4 items-center relative">
		<h2 class="text-xl font-semibold">Topics ({data.task?.tasksToTopics.length})</h2>

		<Popover.Root bind:open>
			<Popover.Trigger bind:ref={triggerRef}>
				<Button variant="outline" class="justify-between" role="combobox" aria-expanded={open}>
					+
				</Button>
			</Popover.Trigger>
			<Popover.Content class="w-[200px] p-0">
				<Command.Root>
					<Command.Input bind:value={search} placeholder="Search topic..." />
					<Command.List>
						<Command.Empty
							>{#if search && !data.topics.filter((t) => t.name?.includes(search)).length}
								<form method="post" action="?/createTopic">
									<input type="hidden" name="name" value={search} />
									<button class="px-4 py-2 rounded bg-secondary">Add Topic</button>
								</form>
							{:else}No topic found.
							{/if}</Command.Empty
						>
						<Command.Group>
							{#each data.topics.filter((t) => !search || t.name?.includes(search)) as topic}
								<form
									action="?/addTopic"
									method="post"
									bind:this={addTopicForms[topic.id]}
									onsubmit={() => (value = topic.id.toString())}
								>
									<input type="hidden" name="topic-id" value={topic.id} />
									<Command.Item
										value={topic.id.toString()}
										onSelect={async () => {
											addTopicForms[topic.id].submit();
											closeAndFocusTrigger();
										}}
									>
										<Check
											class={cn('mr-2 size-4', value !== topic.id.toString() && 'text-transparent')}
										/>
										{topic.name}
									</Command.Item>
								</form>
							{/each}
						</Command.Group>
					</Command.List>
				</Command.Root>
			</Popover.Content>
		</Popover.Root>
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
