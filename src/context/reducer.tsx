import { StateType, ActionType } from './types';

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'SPINNER_ACTIVE':
			return { ...state, spinnerActive: true };
		case 'SPINNER_CURTAIN_ON':
			return {
				...state,
				spinnerCurtainOn: 'spinner__curtain--on',
			};
		case 'WELCOME_PAGE_OFF':
			return { ...state, welcomePageActive: false };
		case 'SET_ARTWORK':
			return { ...state, artwork: action.payload };
		case 'LOAD_ARTWORK':
			return { ...state, artworkLoaded: true };
		default:
			return state;
	}
};
