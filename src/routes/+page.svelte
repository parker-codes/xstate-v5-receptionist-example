<script lang="ts">
	import { interpret } from 'xstate';
	import type { ActorRefFrom } from 'xstate';
	import { appMachine } from '../machines/app.machine';
	import type { pageMachine } from '../machines/page.machine';

	const service = interpret(appMachine).start();

	// We must cast the page actor to the correct type
	const page = service.system.get('page') as ActorRefFrom<typeof pageMachine>;
	let pageCtx = page.getSnapshot()!.context;
	$: console.log('page', page);
	$: console.log('page context', pageCtx);

	// Temporary subscription to keep the context reactive until @xstate/svelte is updated
	page.subscribe((state: any) => {
		if (state.changed) {
			pageCtx = state.context;
		}
	});
</script>

<button on:click={() => page.send({ type: 'INCREMENT_COUNTER' })}>
	{pageCtx.count}
</button>
