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
      // This example is flawed because the INCREMENT event is not guaranteed 
      // to run in between the two actions. 
      actions: ['forwardIncrement', 'retrieveIncrement']
    },
  },
},
  {
    actions: {
      forwardIncrement: sendTo(
        ({ system }) => system.get('counter'),
        { type: 'INCREMENT' }
      ),
      retrieveIncrement: assign(({ system }) => ({
        count: system.get('counter').getSnapshot().context.count,
      })),
    },
  });


