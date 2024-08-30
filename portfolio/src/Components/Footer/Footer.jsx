import facebook from '/public/facebook.png';
import intstagram from '/public/instagram.png';
import tweeter from '/public/twitter.png';
import linkedin from '/public/linkedin.png';
import logo from '/public/logo.png';
import ornament2 from '/public/onament2.png';

const Footer = () => {
	return (
		<div className='p-5 text-center flex flex-col items-center  gap-10'>
			<div className='h-[50px]'>
				<img className='h-[100%]' src={ornament2} alt='' />
			</div>

			<article className=''>
				<header className='text-4xl font-bold text-[#FD5956] mb-10'>
					Contact.
				</header>
				<p className='lg:w-[50%] lg:mx-auto lg:my-0'>
					Truth is a deep kindness that teaches us to be content in our everyday
					life and share with the people the same happiness. the feeling of
					sunday is the same everywhere: heavy, melancholy, standing still.
				</p>
			</article>

			<div>
				<img src={logo} alt='' />
			</div>

			<div className='flex gap-5 h-[23px]'>
				<div>
					<img className='h-[100%]' src={facebook} alt='facebook image' />
				</div>
				<div>
					<img className='h-[100%]' src={intstagram} alt='instagram image' />
				</div>
				<div>
					<img className='h-[100%]' src={tweeter} alt='tweeter image' />
				</div>
				<div>
					<img className='h-[100%]' src={linkedin} alt='linkedin image' />
				</div>
			</div>

			<p>© 2021 AbbVie Inc. . All rights reserved</p>
		</div>
	);
};

export default Footer;
