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
	let triggerRef = $state<any>();
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

	function getProgress() {
		return (data.task?.currentPoints / data.task?.totalPoints) * 100;
	}
</script>

<h1 class="my-4 text-2xl font-bold text-center">{data.task?.name}</h1>

<div class="my-4">
	<div class="flex justify-center gap-4 items-center relative">
		<h2 class="text-xl font-semibold">Topics ({data.task?.tasksToTopics.length})</h2>

		<Popover.Root bind:open>
			<Popover.Trigger bind:this={triggerRef}>
				<Button variant="outline" class="justify-between" role="combobox" aria-expanded={open}>
					+
				</Button>
			</Popover.Trigger>
			<Popover.Content class="w-[200px] p-0">
				<Command.Root>
					<Command.Input bind:value={search} placeholder="Search topic..." />
					<Command.List>
						<Command.Empty>
							<form method="post" action="?/createTopic">
								<input type="hidden" name="name" value={search} />
								<button class="px-4 py-2 rounded bg-secondary">Add Topic</button>
							</form>
						</Command.Empty>

						<Command.Group>
							{#each data.topics as topic}
								<form
									action="?/addTopic"
									method="post"
									bind:this={addTopicForms[topic.id]}
									onsubmit={() => (value = topic.id.toString())}
								>
									<input type="hidden" name="topic-id" value={topic.id} />
									<Command.Item
										value={topic.name!}
										onSelect={() => {
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
	<div class="flex justify-center flex-wrap gap-2 my-1 relative">
		{#if data.task?.tasksToTopics}
			{#each data.task?.tasksToTopics as topic}
				<a href="/progress/topics/{topic.topic.id}">
					<div
						class="relative bg-blue-500 text-white rounded-full px-2 py-1 shadow font-medium hover:bg-blue-600 transition cursor-pointer group"
						title="Click for more details about {topic.topic.name}"
					>
						{topic.topic.name}
						<form
							action="?/removeTopic"
							method="post"
							class="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition"
						>
							<input type="hidden" name="topic-id" value={topic.topic.id} />
							<button
								type="submit"
								onclick={(e) => {
									e.preventDefault();
									e.target.closest('form')?.submit();
								}}
								class="bg-white text-red-500 hover:text-red-700 hover:bg-red-50 font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm"
								aria-label="Remove topic"
							>
								&times;
							</button>
						</form>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>

<div class="my-8">
	<h2 class="text-xl font-semibold text-center mb-4">Progress ({getProgress().toFixed(2)}%)</h2>

	<div class="flex items-center gap-4 max-w-xl mx-auto">
		<form method="POST" action="?/updateProgress" class="flex items-center gap-4 w-full">
			<input
				type="number"
				name="currentPoints"
				value={data.task?.currentPoints}
				class="w-20 p-2 border rounded"
				min="0"
				onchange={(e) => e.target.form?.submit()}
			/>

			<div class="flex-1">
				<div class="w-full rounded-full h-4">
					<progress max="100" value={getProgress()}>{getProgress()}%</progress>
				</div>
			</div>
			<input
				type="number"
				name="totalPoints"
				value={data.task?.totalPoints}
				class="w-20 p-2 border rounded"
				min="1"
				onchange={(e) => e.target.form?.submit()}
			/>
		</form>
	</div>
</div>
