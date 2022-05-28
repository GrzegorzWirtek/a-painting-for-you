import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Painting.scss';

const Painting = () => {
	const {
		state: { artwork, welcomePageActive },
	} = useContext(AppContext);

	return (
		<main className={`painting ${welcomePageActive ? '' : 'painting--start'}`}>
			<div className='painting__image-wrapper'>
				<img className='painting__image' src={artwork.imgUrl} alt='' />
			</div>
		</main>
	);
};

export default Painting;
export {};
