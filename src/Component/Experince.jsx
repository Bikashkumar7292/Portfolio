import React from 'react'
import java from "../../public/java.png"
import express from "../../public/express.png"
import MongoDb from "../../public/MongoDb.png"
import nodejs from "../../public/nodejs.png"
import RaectLogo from "../../public/React.png"
import tailwindPng from "../../public/tailwind.png"
import Html from "../../public/html.png"
import CSS from "../../public/Css.png"
import JavaScript from "../../public/javaScript.png"



function Experince() {
	const cardItem=[
		{
			id:1,
			img:java,
			name:java

		},{
			id:2,
			express,
			name:"express"
		},
		{
			id:3,
			img:nodejs,
			name:"nodejs"
		},
		{
			id:4,
			img:MongoDb,
			name:"MongoDb"

		},
		{
			id:5,
			img:RaectLogo,
			name:"RaectLogo"

		},
		{
			id:6,
			img:tailwindPng,
			name:"tailwindPng"

		},
		{
			id:7,
			img:Html,
			name:"HTML5"

		},
		{
			id:7,
			img:CSS,
			name:"CSS"

		},
		{
			id:7,
			img:JavaScript,
			name:"javaScript"

		},
	]
  return (
	<>
	<div name="Experince" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16   '>
		<div>
		<h1 className='text-green-600 font-bold text-3xl mb-5'>My Experince</h1>
		<span className=''> I've more than one yaer experince in below tecgnology </span>
		</div>
		<div className=' grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
		{cardItem.map(({id,img,name})=>(
			<div key={id.id} className='flex flex-col items-center justify-center border-[2px] rounded-full md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-110 '  >
			<img src={img} alt="" className='w-[150px]   rounded-full ' />
			<div>
				<div className=''>{name}</div>
				{/* <p className='px-2 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quisquam?</p> */}
			</div>
			{/* <div className='justify-around px-6 py-4  space-x-4'><button className='bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>Video</button>
			<button className='bg-green-500 hover:bg-green-900 text-white font-bold px-4 py-2 rounded'>Source code</button></div> */}

			</div>
		))}
		</div>

	</div>

	</>
  )
}

export default Experince
