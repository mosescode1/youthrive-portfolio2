import Logo from '/public/logo.png';
import hamburgerImage from '/public/hamburger.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);
	return (
		<div className='flex mx-5 items-center justify-between w-screen '>
			{/* Image Logo */}
			<div>
				<img className='w-20' src={Logo} alt='logo image' />
			</div>

			<div
				className='bg-black h-[25px] w-[25px] md:hidden'
				onClick={() => setHamburger((s) => !s)}>
				<img className='h-full' src={hamburgerImage} alt='' />
			</div>

			{/* Navigation */}
			<ul className='hidden md:flex text-black gap-7 font-bold '>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#home'>Home</a>
				</li>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#contributors'>Contributors</a>
				</li>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#about'>About me</a>
				</li>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#services'>Services</a>
				</li>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#porfolio'>Portfolio</a>
				</li>
				<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			{/* Button */}
			<button className='hidden md:block bg-black px-3 py-1 font-bold'>
				Portfolio Here
			</button>

			{/* Mobile Navigation */}
			<MobileNav hamburger={hamburger} />
		</div>
	);
};

function MobileNav({ hamburger }) {
	return (
		<>
			{hamburger && (
				<div className='bg-black absolute left-0 top-14 w-full p-5 h-screen  text-white grid place-content-center gap-5'>
					<ul className=' grid gap-5 text-bold '>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#home'>Home</a>
						</li>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#contributors'>Contributors</a>
						</li>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#about'>About me</a>
						</li>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#services'>Services</a>
						</li>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#porfolio'>Portfolio</a>
						</li>
						<li className='hover:text-[#FD5956] hover:underline hover:underline-offset-4'>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					{/* Button */}
					<button className='h bg-white text-black px-3 py-1 font-bold'>
						Portfolio Here
					</button>
				</div>
			)}
		</>
	);
}

MobileNav.propTypes = {
	hamburger: PropTypes.bool,
};

export default Navbar;
