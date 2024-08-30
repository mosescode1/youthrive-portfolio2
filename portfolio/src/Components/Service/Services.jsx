import card1 from '/public/card1image.png';
import card2 from '/public/card2image.png';
import card3 from '/public/card3image.png';

const Services = () => {
	return (
		<div className=' text-black p-5'>
			<article className='text-center'>
				<header className='font-bold text-4xl'>
					Services<span className='text-[#FD5956]'>.</span>
				</header>
				<p className='lg:w-[50%] lg:mx-auto lg:my-0'>
					Our team members are experts in all facets of the design industry
					including: print design, illustration, branding, identity and more.
				</p>
			</article>

			<section className='grid place-content-center mt-10 gap-5 md:grid-cols-3 lg:place-items-center'>
				{/* card1 */}
				<div className='p-5 max-w-64 hover:shadow-xl'>
					<article className='h-[100px]'>
						<img className='h-full' src={card1} alt='ui/ux design' />
					</article>
					<div className='mt-10'>
						<header className='font-bold text-xl mb-3 text-justify'>
							UI/UX Design
						</header>
						<p>
							Why money &apos; s in that office,right If she start giving me
							some bullshit about it aint there someplace or anywhere.
						</p>
					</div>
				</div>
				{/* card2 */}

				<div className='p-5 max-w-64 hover:shadow-xl'>
					<article className='h-[100px]'>
						<img className='h-full' src={card2} alt='Web Design' />
					</article>
					<div className='mt-10'>
						<header className='font-bold text-xl mb-3 text-justify'>
							Web Design
						</header>
						<p>
							Why money &apos; s in that office, right If she start giving me
							some bullshit about it ain &apos; t there someplace or anywhere.
						</p>
					</div>
				</div>

				{/* card3 */}
				<div className='p-5 max-w-64 hover:shadow-xl'>
					<article className='h-[100px]'>
						<img className='h-full' src={card3} alt='Web Developing' />
					</article>
					<div className='mt-10'>
						<header className='font-bold text-xl mb-3 text-justify'>
							Web Developing
						</header>
						<p>
							Why money &apos; s in that office, right If she start giving me
							some bullshit about it ain &apos; t there someplace or anywhere.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
