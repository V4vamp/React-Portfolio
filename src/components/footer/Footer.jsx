import React from "react";
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Muhammad</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>

					{/* <li>
						<a href='#testimonials' className='footer__link'>
							Testimonials
						</a>
					</li> */}
				</ul>

				<div className='footer__social'>
					<a
						href='https://www.instagram.com/tech_ninjie/'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-instagram'></i>
					</a>

					<a
						href='https://www.linkedin.com/in/imookhtar/'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-linkedin'></i>
					</a>

					<a
						href='https://twitter.com/KountDrac'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-twitter'></i>
					</a>

					<a
						href='https://github.com/V4Vamp'
						className='footer__social-link'
						target='_blank'
						rel='noopener noreferrer'>
						<i class='bx bxl-github'></i>
					</a>
				</div>

				<span className='footer__copy'>
					&#169; Muhammad M. Yusuf. All rigths reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
