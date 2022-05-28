export const initialState = {
	spinnerActive: false,
	welcomePageActive: true,
	spinnerCurtainOn: '',
	artworkLoaded: false,
	artwork: {
		id: 0,
		imgUrl: '',
		artist: '',
		title: '',
		type: '',
		date: '',
		text: '',
	},
};

export type StateType = typeof initialState;

export type PayloadType = typeof initialState.artwork;

export type ActionType =
	| { type: 'SPINNER_ACTIVE' }
	| { type: 'SPINNER_CURTAIN_ON' }
	| { type: 'WELCOME_PAGE_OFF' }
	| { type: 'SET_ARTWORK'; payload: PayloadType }
	| { type: 'LOAD_ARTWORK' };

export type DispatchType = (action: ActionType) => void;
