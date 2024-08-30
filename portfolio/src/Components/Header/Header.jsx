import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

const Header = () => {
	return (
		<>
			<div className='bg-contain  bg-hero-pattern'>
				<div className=' text-white h-14 flex items-center overflow-hidden '>
					<Navbar />
				</div>
				<div>
					<Hero />
				</div>
			</div>
		</>
	);
};

export default Header;
