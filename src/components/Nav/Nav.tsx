import { useContext } from 'react';
import AppContext from '../../context/AppContext';
// import { initialState } from '../../context/types';
import './Nav.scss';

const Nav = () => {
	const {
		dispatch,
		state: { welcomePageActive, paintingEnd },
		getArtworkIds,
	} = useContext(AppContext);

	const handleAnotherPainting = () => {
		dispatch({ type: 'ANOTHER_ARTWORK' });
		getArtworkIds();
		setTimeout(() => {
			dispatch({ type: 'CLEAR_ARTWORK' });
		}, 300);
	};

	return (
		<nav
			className={`nav ${welcomePageActive ? '' : 'nav--start'} ${
				paintingEnd ? 'nav--end' : ''
			}`}>
			<button className='nav__button' onClick={handleAnotherPainting}>
				Another painting
			</button>
		</nav>
	);
};

export default Nav;
export {};
