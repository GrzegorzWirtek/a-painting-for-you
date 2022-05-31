import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Painting from './components/Painting/Painting';
// import Nav from './components/Nav/Nav';

import { useContext, useEffect } from 'react';
import AppContext from './context/AppContext';

function App() {
	const {
		getArtworkIds,
		state: { welcomePageActive, artworkLoaded },
	} = useContext(AppContext);

	useEffect(() => {
		getArtworkIds();
	}, [getArtworkIds]);

	return (
		<div className='App'>
			<Header />
			{welcomePageActive ? <WelcomePage /> : null}
			{artworkLoaded ? <Painting /> : null}
			<Footer />
		</div>
	);
}

export default App;
