import { createContext } from 'react';
import { DispatchType, StateType, initialState } from './types';

const AppContext = createContext<{
	state: StateType;
	dispatch: DispatchType;
	getArtworkIds: () => Promise<void>;
}>({
	state: initialState,
	dispatch: () => {},
	getArtworkIds: async () => {},
});

export default AppContext;
export {};
