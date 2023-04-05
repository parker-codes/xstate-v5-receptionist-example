import { createMachine, assign, sendTo } from 'xstate';

interface PageContext {
  count: number;
}

type PageEvent = { type: 'INCREMENT_COUNTER' };

export const pageMachine = createMachine({
  id: 'page',

  schema: {
    context: {} as PageContext,
    events: {} as PageEvent,
  },
  tsTypes: {} as import("./page.machine.typegen").Typegen0,

  context: {
    count: 0,
  },

  on: {
    INCREMENT_COUNTER: {
      actions: ['forwardIncrement', 'retrieveIncrement', 'logCount']
    },
  },
},
  {
    actions: {
      forwardIncrement: sendTo(({ system }) => system.get('counter'), { type: 'INCREMENT' }),
      retrieveIncrement: assign(({ system }) => {
        console.log('(page) retrieveIncrement', system.get('counter').getSnapshot().context.count);
        return {
          count: system.get('counter').getSnapshot().context.count,
        }
      }),
      logCount: ({ context }) => {
        console.log('(page) logCount', context.count);
      }
    },
  });


