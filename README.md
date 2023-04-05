# XState v5 Receptionist Example

This project is a small playground to test the new Receptionist pattern 
in XState v5! Exciting stuff!

This new API will help us clean up references - instead of storing 
references to other machines in context, we can use `system.get('someId')`
to retrieve the right actor. This can be used to send events as well as 
get the latest snapshot.

Some things to note about the structure:
- [The app machine](./src/machines/app.machine.ts) is the root of the statechart tree. It uses a top-level `invoke`, which binds the lifetime of the children to itself (instead of spawning). This implicitly creates a system.
- [The page machine](./src/machines/page.machine.ts) is where we trigger the INCREMENT_COUNTER event, which will forward the event to the counter machine and then take the latest value.
- [The counter machine](./src/machines/page.machine.ts) simply receives the event (in this case from _through_ the page machine) and is read (again, through the page machine).
- [The Svelte page](./src/routes/+page.svelte) is where we interpret the actor tree, subscribe to changes, and trigger events.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of the app:

```bash
pnpm build
```

You can preview the production build with `npm run preview`.
