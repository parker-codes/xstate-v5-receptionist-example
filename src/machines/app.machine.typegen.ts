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
		services: 'counter' | 'page';
	};
	eventsCausingActions: {};
	eventsCausingDelays: {};
	eventsCausingGuards: {};
	eventsCausingServices: {
		counter: 'xstate.init';
		page: 'xstate.init';
	};
	matchesStates: undefined;
	tags: never;
}
