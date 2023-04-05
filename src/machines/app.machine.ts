import { createMachine } from 'xstate';
import { pageMachine } from './page.machine';
import { counterMachine } from './counter.machine';

interface AppContext {
  count: number;
}

type AppEvent = { type: 'LOADED' } | { type: 'INCREMENT' };

export const appMachine = createMachine({
  id: 'app',

  schema: {
    context: {} as AppContext,
    events: {} as AppEvent,
  },
  tsTypes: {} as import("./app.machine.typegen").Typegen0,

  invoke: [
    { id: 'page', systemId: 'page', src: pageMachine },
    { id: 'counter', systemId: 'counter', src: counterMachine },
  ],
},
);

