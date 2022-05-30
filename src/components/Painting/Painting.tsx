import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Painting.scss';

const Painting = () => {
	const {
		state: {
			artwork: { imgUrl, artist, title, type, date, text },
			welcomePageActive,
			paintingEnd,
		},
	} = useContext(AppContext);

	return (
		<main
			className={`painting ${welcomePageActive ? '' : 'painting--start'} ${
				paintingEnd ? 'painting--end' : ''
			}`}>
			<div className='painting__image-wrapper'>
				<article className='painting__text-wrapper'>
					<h2 className='painting__title'>{title}</h2>
					<h2 className='painting__artist'>{artist}</h2>
					<p className='painting__date-and-type'>
						{date} {type}
					</p>
					<p className='painting__text'>{text}</p>
				</article>
				<span className='border__span border__span--p1'></span>
				<span className='border__span border__span--p2'></span>
				<span className='border__span border__span--p3'></span>
				<span className='border__span border__span--p4'></span>
				<img className='painting__image' src={imgUrl} alt='' />
				<div className='painting__image-curtain'></div>
			</div>
		</main>
	);
};

export default Painting;
export {};
