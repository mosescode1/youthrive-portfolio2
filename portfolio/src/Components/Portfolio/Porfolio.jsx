import image1 from '/public/image1.png';
import image2 from '/public/image2.png';
import image3 from '/public/image3.png';
import image4 from '/public/image4.png';
import image5 from '/public/image5.png';

const Porfolio = () => {
	return (
		<section className='p-14  md:p-5 lg:p-32 text-center text-2xl'>
			<div>
				<header>Our Regurlar Updated</header>
				<p className='font-bold text-[#FD5956]'>Portfolio.</p>
			</div>

			{/* Grid images */}
			<div className='grid gap-5 mt-7 md:grid-cols-3'>
				<article className='hidden md:block row-span-2'>
					<img className='h-[100%]' src={image1} alt='portfolio image1' />
				</article>

				<article className='hidden md:block h-[200px]'>
					<img
						className='h-[100%] w-full'
						src={image2}
						alt='portfolio image1'
					/>
				</article>
				<article className='h-[200px] '>
					<img
						className='h-[100%] w-full'
						src={image3}
						alt='portfolio image1'
					/>
				</article>
				<article className='h-[200px]  '>
					<img
						className='h-[100%] w-full'
						src={image4}
						alt='portfolio image1'
					/>
				</article>
				<article className='h-[200px]  '>
					<img
						className='h-[100%] w-full'
						src={image5}
						alt='portfolio image1'
					/>
				</article>
			</div>
		</section>
	);
};

export default Porfolio;
