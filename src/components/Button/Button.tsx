import './Button.scss';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const CONTENT = 'See the painting for you';
const HOVER_DELAY = 2300;

const Button = () => {
	const contentArr: string[] = CONTENT.split('');
	const [closeClass, setCloseClass] = useState('');
	const [hoverClass, setHoverClass] = useState('');
	const context = useContext(AppContext);
	const {
		dispatch,
		state: { artwork, artworkLoaded },
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
		return () => {
			clearTimeout(hoverSetTimeout);
		};
	}, [artwork, dispatch]);

	const handleClick = () => {
		if (hoverClass === '') return;
		setCloseClass('button__close');
		dispatch({ type: 'SPINNER_ACTIVE' });
		setTimeout(() => {
			if (artworkLoaded) {
				dispatch({ type: 'SPINNER_CURTAIN_ON' });
			}
			setTimeout(() => {
				dispatch({ type: 'WELCOME_PAGE_OFF' });
			}, 300);
		}, 2000);
	};

	return (
		<button
			className={`button ${closeClass} ${hoverClass}`}
			onClick={handleClick}>
			<span className='button__span'></span>
			<span className='button__span'></span>
			<span className='button__span'></span>
			<span className='button__span'></span>
			{spans}
		</button>
	);
};

export default Button;
export {};
