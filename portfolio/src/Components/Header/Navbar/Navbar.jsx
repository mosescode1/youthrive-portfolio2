import Logo from '/public/logo.png';

const Navbar = () => {
	return (
		<div className='flex mx-5 md:mx-14 items-center justify-between w-screen '>
			{/* Image Logo */}
			<div>
				<img className='w-20' src={Logo} alt='logo image' />
			</div>

			{/* Navigation */}
			<ul className='hidden text-black gap-7 text-bold md:hidden'>
				<li className='text-[#FD5956] underline underline-offset-4'>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#contributors'>Contributors</a>
				</li>
				<li>
					<a href='#about'>About me</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#porfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			{/* Button */}
			<button className='hidden bg-black px-3 py-1 font-bold'>
				Portfolio Here
			</button>
		</div>
	);
};

export default Navbar;
