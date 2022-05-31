import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Nav.scss';

const Nav = () => {
	const { dispatch, getArtworkIds } = useContext(AppContext);

	const handleAnotherPainting = () => {
		dispatch({ type: 'ANOTHER_ARTWORK' });
		getArtworkIds();
		setTimeout(() => {
			dispatch({ type: 'CLEAR_ARTWORK' });
		}, 300);
	};

	return (
		<nav className='nav'>
			<button className='nav__button' onClick={handleAnotherPainting}>
				Another painting
			</button>
		</nav>
	);
};

export default Nav;
export {};
