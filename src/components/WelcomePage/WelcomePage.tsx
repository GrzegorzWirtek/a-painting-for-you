import './WelcomePage.scss';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const WelcomePage = () => {
	const context = useContext(AppContext);
	if (!context) return null;
	const {
		state: { spinnerActive },
	} = context;

	return (
		<div className='welcome'>
			<Button />
			{spinnerActive && <Spinner />}
		</div>
	);
};

export default WelcomePage;
export {};
