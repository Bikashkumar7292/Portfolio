import React from 'react'
import java from "../../public/java.png"
import express from "../../public/express.png"
import MongoDb from "../../public/MongoDb.png"
import nodejs from "../../public/nodejs.png"
import RaectLogo from "../../public/React.png"
import tailwindPng from "../../public/tailwind.png"
import paython from "../../public/pathon.png"

function Portfolio() {
	const cardItem=[
		{
			id:1,
			img:java,
			name:"java"

		},{
			id:2,
			img:express,
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
			img:paython,
			name:"paython"

		},
	]
  return (
	<>
	<div name="PortFolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10   '>
		<div>
		<h1 className='text-green-600 font-bold text-3xl mb-5'>Portfolio</h1>
		<span className='underline font-semibold'>Featured Project</span>
		</div>
		<div className=' grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
		{cardItem.map(({id,img,name})=>(
			<div key={id.id} className=' md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 '  >
			<img src={img} alt="" className='w-[120px] h-[120px]  rounded-full p-1 border-[2px]' />
			<div>
				<div className='font-bold  text-xl mb-2 px-2'>{name}</div>
				<p className='px-2 text-gray-500'>I am learning THere are so Many Technologies which Availabe here PLZ watch  </p>
			</div>
			<div className='justify-around px-6 py-4  space-x-4'><button className='bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>Video</button>
			<button className='bg-green-500 hover:bg-green-900 text-white font-bold px-4 py-2 rounded'>Source code</button></div>

			</div>
		))}
		</div>

	</div>

	</>
  )
}

export default Portfolio
