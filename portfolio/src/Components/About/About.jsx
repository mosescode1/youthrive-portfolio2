import aboutImage from '/public/aboutImage.png';
import ornament from '/public/Ornament.png';
import backgroundLine from '/public/backgroundline.png';
import eclipse from '/public/eclipse.png';
const About = () => {
	return (
		<div className=' text-black p-5 relative '>
			<article className='text-center'>
				<header className='font-bold text-4xl my-5'>
					About me <span className='text-[#FD5956]'>.</span>
				</header>
				<p className='lg:w-[50%] lg:mx-auto lg:my-0'>
					I &apos; m Justin Vaccaro and i do web design, Graphic Design, User
					Experiences. habitant et netus et malesuada fames ac turpis egestas.
					Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
					amet.
				</p>
			</article>
			{/* Image Section */}
			<div className='bg-about-pattern bg-contain bg-center bg-no-repeat h-[550px] pt-20'>
				<section className='w-[40%] mx-auto my-0  h-[450px]'>
					<div className='h-[100%] '>
						<img className='h-[100%] mx-auto my-0' src={aboutImage} alt='' />
					</div>
				</section>
			</div>

			{/* Abosolute position images */}
			<article className='hidden md:block absolute top-40 h-[200px]'>
				<img className='h-[100%]' src={ornament} alt='ornament image' />
			</article>

			<article className='hidden md:block absolute right-0 h-[150px] bottom-40'>
				<img className='h-[100%]' src={eclipse} alt='ornament image' />
			</article>

			<article className='absolute h-[50%]  w-[92%] top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'>
				<img
					className='h-[100%] w-full'
					src={backgroundLine}
					alt='ornament image'
				/>
			</article>
		</div>
	);
};

export default About;
