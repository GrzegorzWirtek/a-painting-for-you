import './Painting.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context/AppContext';
import Nav from '../Nav/Nav';

const Painting = () => {
	const {
		state: {
			artwork: { imgUrl, artist, title, type, date, text },
			welcomePageActive,
			paintingEnd,
		},
	} = useContext(AppContext);

	const imgRef = useRef<HTMLImageElement>(null)

	const [elWidth, setElWidth] = useState('auto')

	useEffect(()=>{
		if(imgRef.current!.clientWidth){
			setElWidth(`${imgRef.current!.clientWidth}px`)
		}
	},[welcomePageActive])

	return (
		<main
			className={`painting ${welcomePageActive ? '' : 'painting--start'} ${
				paintingEnd ? 'painting--end' : ''
			}`}>
			<article className='painting__content-wrapper'>
				<div className='painting__image-wrapper'>
					<span className='border__span border__span--p1'></span>
					<span className='border__span border__span--p2'></span>
					<span className='border__span border__span--p3'></span>
					<span className='border__span border__span--p4'></span>
					<img className='painting__image' src={imgUrl} alt='' ref={imgRef}/>
					<div className='painting__image-curtain'></div>
				</div>
				<div className='painting__text-wrapper' style={{width: elWidth}}>
					<h2 className='painting__title'>{title}</h2>
					<h2 className='painting__artist'>{artist}</h2>
					<p className='painting__date-and-type'>
						{date} {type}
					</p>
					<p className='painting__text'>{text}</p>
					<Nav />
				</div>
			</article>
		</main>
	);
};

export default Painting;
export {};
