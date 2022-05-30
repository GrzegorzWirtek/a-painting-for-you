import './WelcomePage.scss';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const WelcomePage = () => {
	const {
		state: { spinnerActive, paintingEnd },
	} = useContext(AppContext);

	return (
		<div className={`welcome  ${paintingEnd ? 'welcome--end' : ''}`}>
			<Button />
			{spinnerActive && <Spinner />}
		</div>
	);
};

export default WelcomePage;
export {};
