import { createMachine, assign } from 'xstate';

interface CounterContext {
  count: number;
}

type CounterEvent = { type: 'INCREMENT' };

export const counterMachine = createMachine({
  id: 'counter',

  schema: {
    context: {} as CounterContext,
    events: {} as CounterEvent,
  },
  tsTypes: {} as import("./counter.machine.typegen").Typegen0,

  context: {
    count: 0,
  },

  on: {
    INCREMENT: {
      actions: ['increment']
    }
  }
},
  {
    actions: {
      increment: assign(({ context }) => ({
        count: context.count + 1,
      })),
    },
  });

