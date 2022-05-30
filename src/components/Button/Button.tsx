import './Button.scss';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const CONTENT = 'See the painting for you';
const HOVER_DELAY = 1500;

const Button = () => {
	const contentArr: string[] = CONTENT.split('');
	const [closeClass, setCloseClass] = useState('');
	const [hoverClass, setHoverClass] = useState('');
	const context = useContext(AppContext);
	const {
		dispatch,
		state: { artwork, artworkLoaded, spinnerActive, firstLoading },
	} = context;

	const spans = contentArr.map((letter, index) => (
		<span className='button__content' key={index}>
			{letter}
		</span>
	));

	useEffect(() => {
		if (artwork.id > 0) {
			dispatch({ type: 'LOAD_ARTWORK' });
		}
		const hoverSetTimeout = setTimeout(() => {
			setHoverClass('button__hover');
		}, HOVER_DELAY);
		if (artworkLoaded && spinnerActive) {
			dispatch({ type: 'SPINNER_CURTAIN_ON' });
			setTimeout(() => {
				dispatch({ type: 'WELCOME_PAGE_OFF' });
			}, 300);
		}

		return () => {
			clearTimeout(hoverSetTimeout);
		};
	}, [artwork, dispatch, artworkLoaded, spinnerActive]);

	const handleClick = () => {
		if (hoverClass === '') return;
		setCloseClass('button__close');
		dispatch({ type: 'SPINNER_ACTIVE' });
	};

	return (
		<button
			className={`button ${closeClass} ${hoverClass} ${firstLoading}`}
			onClick={handleClick}>
			<span className='border__span border__span--b1'></span>
			<span className='border__span border__span--b2'></span>
			<span className='border__span border__span--b3'></span>
			<span className='border__span border__span--b4'></span>
			{spans}
		</button>
	);
};

export default Button;
export {};
