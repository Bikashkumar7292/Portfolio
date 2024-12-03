import React from 'react'
import { FaFacebookSquare,FaTelegram,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
	<>
	<hr />
	<footer className='py-12'>
		<div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  '>
			<div className='flex flex-cols items-center justify-center'>
				<div className='flex space-x-2'>
					<FaFacebookSquare size={24}/>
					<FaInstagram size={24}/>
					<FaTwitter size={24}/>
					<FaLinkedin size={24}/>
					<FaTelegram size={24}/>
				</div>

			</div>
			<div className='mt-8 border-t border-gray-800 pt-8 flex flex-col items-center'>
					<p className='text-sm '>
						&copy; {new Date().getFullYear()} All rights reserved.
					</p>
					<p className='text-sm '>Supportive Friends Mr.Sidhu</p>
				</div>

		</div>
	</footer>
	  </>
  )
}

export default Footer
