<script lang="ts">
	import type { ActorRefFrom } from 'xstate';
	import { onMount } from 'svelte';
	import { interpret } from 'xstate';
	import { appMachine } from '../machines/app.machine';
	import type { pageMachine } from '../machines/page.machine';

	const service = interpret(appMachine).start();

	const page = service.system.get('page') as ActorRefFrom<typeof pageMachine>;
	let pageCtx = page.getSnapshot()!.context;
	$: console.log('page', page);
	$: console.log('page context', pageCtx);

	page.subscribe((state: any) => {
		if (state.changed) {
			pageCtx = state.context;
		}
	});

	onMount(() => {
		console.log('onMount');
	});
</script>

<button on:click={() => page.send({ type: 'INCREMENT_COUNTER' })}>
	{pageCtx.count}
</button>
