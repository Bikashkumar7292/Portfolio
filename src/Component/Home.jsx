import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Pic from "../../public/photo.jpg"

function Home() {
  return (
	<>
	<div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20   '>
		<div className=' flex flex-col md:flex-row '>
		<div className='md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1'>
		<span className='text-xl'>Welcome in My Feed.</span>
		<div className='flex space-x-1 text-2xl md:text-4xl'>
		<h1 >Hello , I`m a</h1>
			 <ReactTyped
			 className='text-red-800 font-bold'
          strings={ [" Developer","Programmer","Coder"]}
          typeSpeed={40}
		  backSpeed={50}
		  loop={true}
        />
		</div>
		<br />
		<p className='text-sm md:text-md text-justify'> My name is BIKASH KUMAR. I was born and brought up in Goddda. However, I presently put up in Pune. My highest degree is a full time B.Tech/B.E. in Computers from DAV Institute of Engineering & Technology, Daltangaj, that I completed in Jun-2024. My % Marks of 100 Maximum is 62.8 and I am an All rounder and a Scholarship Recipient. I have also done a Diploma degree in Mechanical from Jharkhand University, Ranchi, Ranchi. I finished my course successfully as an All rounder, among Top 10 in class and a Scholarship Recipient with 75.8% My Computers and Mechanical degree(s) have given a range of skills that I feel are crucial for my career and life. Despite limited exposure, I have understood that hard work and determination can make anything possible. I am ready to do that. Also, I am trying to develop a habit of reading current trends and industry news.

</p>
	<br />
	<div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>	{/* social media ico */}
		<div className='space-y-2 '>
			<h1 className='font-bold '>Availabe On</h1>
			<ul className='flex space-x-4 '>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'>
					<a href="https://www.facebook.com/bikashkumar62?mibextid=ZbWKwL" target='_blank'>
					<FaFacebookSquare />
					</a>

			</li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><a href="https://www.linkedin.com/in/bikash-kumar-a34718192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin /></a></li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><a href="https://www.youtube.com/@1.1Million..Subscriber.Bikash7"target='_blank'><SiYoutube /></a></li>
				<li className='text-xl  md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'>
					<a href="https://t.me/BikashMah" 	target='_blank'><FaTelegram /></a>
				</li>
			</ul>
		</div>
		<div className='space-y-2 '><h1 className='font-bold '>Currently Working</h1>
			<ul className='flex space-x-3'>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><SiMongodb />
			</li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><SiExpress /></li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><FaReact /></li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><FaNodeJs /></li>
			</ul>

		</div></div>
		 </div>
		<div className='md:w-1/2 md:ml-48 md:mt-20  mt-8  order-1'>
		<img src={Pic} className='rounded-full md:w-[350px] md:h-[350px]' alt="" />
		</div>
		</div>

	</div>

	<hr />
	</>
  )
}

export default Home
