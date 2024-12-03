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
          strings={[" Developer","Programmer","Coder"]}
          typeSpeed={40}
		  backSpeed={50}
		  loop={true}
        />
		</div>
		<br />
		<p className='text-sm md:text-md text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tempora quaerat ratione magni adipisci excepturi? Natus consequuntur corrupti enim consequatur blanditiis, aut neque assumenda obcaecati? Quas illo similique dolorum architecto.</p>
	<br />
	<div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>	{/* social media ico */}
		<div className='space-y-2 '>
			<h1 className='font-bold '>Availabe On</h1>
			<ul className='flex space-x-4 '>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'>
					<a href="" target='_blank'>
					<FaFacebookSquare />
					</a>

			</li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><a href="" target='_blank'><FaLinkedin /></a></li>
				<li className='text-xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><a href=""target='_blank'><SiYoutube /></a></li>
				<li className='text-xl  md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'>
					<a href="" 	target='_blank'><FaTelegram /></a>
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
