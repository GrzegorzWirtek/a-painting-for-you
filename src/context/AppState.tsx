import { ReactNode, useCallback, useReducer } from 'react';
import { reducer } from './reducer';
import AppContext from './AppContext';
import { initialState, PayloadType } from './types';

import axios from 'axios';

const BASE_URL = 'https://api.artic.edu/api/v1/';
const TOTAL_PAGES = 9766;
const ARTWORKS_URL = 'artworks/';

export const AppState = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPainting = useCallback(async (ids: number[]) => {
		const randomId = ids[Math.floor(Math.random() * ids.length)];
		try {
			const { data } = await axios(`${BASE_URL}${ARTWORKS_URL}${randomId}`);
			const {
				id,
				image_id,
				artist_title,
				title,
				artwork_type_title,
				date_start,
				date_end,
				thumbnail,
			} = data.data;
			const date =
				!date_end || date_end === date_start
					? date_start
					: `${date_start}-${date_end}`;

			const artwork: PayloadType = {
				id,
				imgUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
				artist: artist_title,
				title,
				type: artwork_type_title,
				date,
				text: thumbnail ? thumbnail.alt_text : 'No info',
			};

			dispatch({ type: 'SET_ARTWORK', payload: artwork });
		} catch (error) {
			console.log('Get painting error: ', error);
			getPainting(ids);
		}
	}, []);

	const getArtworkIds = useCallback(async () => {
		const page = Math.floor(Math.random() * TOTAL_PAGES);
		try {
			const { data } = await axios(
				`${BASE_URL}artworks?page=${page}&fields=artist_id`,
			);
			const ids = data.data
				.map((item: { artist_id: string }) => item.artist_id)
				.filter((id: number) => id !== null);

			getPainting(ids);
		} catch (error) {
			console.log('Get artwork ids error: ', error);
			getArtworkIds();
		}
	}, [getPainting]);

	return (
		<AppContext.Provider value={{ state, dispatch, getArtworkIds }}>
			{children}
		</AppContext.Provider>
	);
};
