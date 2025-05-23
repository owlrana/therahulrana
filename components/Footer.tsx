import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './MagicButton';

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			{/* background grid */}
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-full h-full opacity-50 "
				/>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Helping the
					<br />
					<span className="text-purple"> developer community</span>.
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					I share my thoughts on Twitter (X) and personal experiences
					on YouTube - from the little I've seen in my journey.
				</p>
				<a href="https://www.youtube.com/@owlranaYTLive">
					<MagicButton
						title="Visit my YouTube LIVE"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyleft © 2025 Rahul Rana
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((info) => (
						<a href={info.link} key={info.id}>
							<div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
								<img
									src={info.img}
									alt="icons"
									width={20}
									height={20}
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
