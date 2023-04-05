import { createMachine } from 'xstate';
import { pageMachine } from './page.machine';
import { counterMachine } from './counter.machine';

export const appMachine = createMachine({
  id: 'app',

  tsTypes: {} as import("./app.machine.typegen").Typegen0,

  invoke: [
    { id: 'page', systemId: 'page', src: pageMachine },
    { id: 'counter', systemId: 'counter', src: counterMachine },
  ],
},
);

