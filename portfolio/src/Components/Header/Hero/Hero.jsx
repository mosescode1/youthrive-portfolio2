import HeroImage from '/public/hero_image.png';
import facebook from '/public/facebook.png';
import intstagram from '/public/instagram.png';
import tweeter from '/public/twitter.png';
import linkedin from '/public/linkedin.png';

const Hero = () => {
	return (
		<div className='h-[95svh] flex items-center justify-center md:gap-36 lg:gap-64'>
			{/* TEXT */}
			<div className=''>
				<div className='grid place-content-center gap-5'>
					<p className='text-2xl'>Hola! I &#39; m</p>
					<p className='5ext-[#FD5956] text-2xl font-bold'>Justion Vaccaro</p>
					<div>
						<h2 className='font-bold text-6xl'>Creative</h2>
						<h2 className='font-bold text-6xl ml-12'>
							Designer <span className='text-5xl text-[#FD5956]'> .</span>
						</h2>
					</div>
					<p className='w-[310px]'>
						Since creative designers often interact with creative teams,
						managers and clients, they need strong communication skills.
					</p>

					<div className='flex gap-5 h-[23px]'>
						<div>
							<img className='h-[100%]' src={facebook} alt='facebook image' />
						</div>
						<div>
							<img
								className='h-[100%]'
								src={intstagram}
								alt='instagram image'
							/>
						</div>
						<div>
							<img className='h-[100%]' src={tweeter} alt='tweeter image' />
						</div>
						<div>
							<img className='h-[100%]' src={linkedin} alt='linkedin image' />
						</div>
					</div>

					<button className='bg-[#FD5956] text-white w-[25%] p-2 border-none font-bold'>
						CV Here
					</button>
				</div>
			</div>
			{/* IMAGE */}
			<div className='h-[400px]'>
				<img
					className='hidden md:block h-[100%]'
					src={HeroImage}
					alt=' hero  image'
				/>
			</div>
		</div>
	);
};

export default Hero;
