// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
	'@@xstate/typegen': true;
	internalEvents: {
		'xstate.init': { type: 'xstate.init' };
	};
	invokeSrcNameMap: {};
	missingImplementations: {
		actions: never;
		delays: never;
		guards: never;
		services: never;
	};
	eventsCausingActions: {
		forwardIncrement: 'INCREMENT_COUNTER';
		logCount: 'INCREMENT_COUNTER';
		retrieveIncrement: 'INCREMENT_COUNTER';
	};
	eventsCausingDelays: {};
	eventsCausingGuards: {};
	eventsCausingServices: {};
	matchesStates: undefined;
	tags: never;
}