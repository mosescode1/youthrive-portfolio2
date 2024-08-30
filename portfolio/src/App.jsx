import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Service/Services';
import Contibutors from './Components/Contributors/Contibutors';
import Footer from './Components/Footer/Footer';
import Porfolio from './Components/Portfolio/Porfolio';

function App() {
	return (
		<div className='overflow-hidden'>
			<Header />
			<About />
			<Services />
			<Contibutors />
			<Porfolio />
			<Footer />
		</div>
	);
}

export default App;
