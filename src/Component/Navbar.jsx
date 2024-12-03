import React from 'react'
import { useState } from 'react';
import Pic from "../../public/photo.jpg"
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import {Link} from "react-scroll"
function Navbar() {
	const navItem=[
		{
			id:1,
			text:"Home"
		},
		{
			id:2,
			text:"About"
		},
		{
			id:3,
			text:"PortFolio"
		},
		{
			id:4,
			text:"Experince"
		},

		{
			id:5,
			text:"Contact"
		}
	]
	const [menu, Setmenu] = useState(false)
  return (
	<>
	<div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md  fixed top-0 left-0 right-0 z-50 bg-white'>
		<div className='flex justify-between items-center h-16 '>
			<div className='flex space-x-2'>
				<img src={Pic} className="h-12 w-12 rounded-full" alt="" />
				<h1 className='font-semibold cursor-pointer text-xl'>Bikas<span className='text-green-500 text-2xl'>h</span>
					<p className='text-sm'>Web developer</p>
				</h1>
			</div>
			<div>
				<ul className="  hidden md:flex space-x-8 ">
					{
						navItem.map(({id,text})=>(
							<li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
								<Link to={text}
								smooth={true}
								duration={500}
								offset={-70}
								activeClass='active'

								>{text}</Link>
								</li>
						))
					}
				</ul>
				<div onClick={()=>Setmenu(!menu)} className='md:hidden' >
						{menu?<ImCross size={18} />:<FiMenu size={24}/>}
					</div>
			</div>
		</div>
		{ menu && (
			<div  className='bg-white'>

				<ul className='md:hidden flex   flex-col h-screen items-center justify-center space-y-3 text-xl '>
				{
						navItem.map(({id,text})=>(
							<li className='hover:scale-105 duration-200 cursor-pointer font-semibold '
							 key={id}>
							<Link
							onClick={()=>Setmenu(!menu)}
							to={text}
							smooth={true}
							duration={500}
							offset={-70}
							activeClass='active'

							>{text}</Link>

							</li>
						))
					}

				</ul>
			</div>)
		}

	</div>

	</>
  )
}

export default Navbar
