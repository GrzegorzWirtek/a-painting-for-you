import './Spinner.scss';
import Globe from '../Globe/Globe';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

let FIRST_DELAY = 1500;
const DELAY = 900;

const Spinner = () => {
	const [dot, setDot] = useState('');

	useEffect(() => {
		const dotInterval = setInterval(() => {
			if (dot === '') setDot('.');
			else if (dot === '.') setDot('..');
			else if (dot === '..') setDot('...');
			else setDot('');
		}, FIRST_DELAY);
		FIRST_DELAY = DELAY;
		return () => clearInterval(dotInterval);
	}, [dot]);

	const {
		state: { spinnerCurtainOn },
	} = useContext(AppContext);

	return (
		<div className='spinner'>
			<div
				className={`spinner__curtain ${
					spinnerCurtainOn && 'spinner__curtain--on'
				}`}></div>
			<Globe />
			<p className='spinner__text'>
				Choosing
				<span className='spinner__span'>{dot}</span>
			</p>
		</div>
	);
};

export default Spinner;
export {};
