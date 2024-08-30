import behance from '/public/behance.png';
import design99 from '/public/design99.png';
import google from '/public/google.png';
import uplabs from '/public/uplab.png';
import dribble from '/public/dribble.png';

const Contibutors = () => {
	return (
		<div className='text-black p-5'>
			<article className='text-center '>
				<header className='font-bold text-4xl'>
					Contributors<span className='text-[#FD5956] text-5xl'>.</span>
				</header>
				<p className='lg:w-[50%] lg:mx-auto lg:my-0'>
					They support products that simplify and automate decent mechanic
					processes saving time for activities.
				</p>
			</article>

			{/* Image Collections */}
			<section className='mt-5'>
				<div className='grid grid-cols-3 place-content-center gap-5 lg:place-items-center'>
					<article className='lg:w-[200px]'>
						<img src={behance} alt='Behance image' />
					</article>
					<article className='lg:w-[200px]'>
						<img src={google} alt='Goodle image' />
					</article>
					<article className='lg:w-[250px]'>
						<img src={dribble} alt='Dribble image' />
					</article>
				</div>
				<div className='grid grid-cols-2 items-center place-items-center mt-5'>
					<article className=' w-[150px] md:w-[250px]'>
						<img src={uplabs} alt='Uplab image' />
					</article>

					<article className='w-[150px] md:w-[250px] '>
						<img src={design99} alt='99 Design image' />
					</article>
				</div>
			</section>
		</div>
	);
};

export default Contibutors;
