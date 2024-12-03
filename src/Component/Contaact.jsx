import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contaact() {
	const {
		register,
		handleSubmit,

		formState: { errors },
	  } = useForm()

	  const onSubmit =async (data) =>{
		console.log(data);

		const userInput={
			name: data.name,
			email: data.email,
			telefone: data.message
		}
		try {
		await	axios.post('https://getform.io/f/adrrqxja',userInput)

		toast.success("your message has been send successfuly");
		} catch (error) {
			// console.error(error)
			toast.error("Something went wrong");

		}

	  }
  return (
	<>
	<div name="Contact"className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
		<h1 className='text-3xl font-bold mb-4'>Contact me </h1>
		<span> Please fill the form below to contact</span>
		<div className='flex flex-col items-center justify-center mt-5 '>
			<form
			onSubmit={handleSubmit(onSubmit)}


			 className='bg-slate-600 w-96 px-8 py-6 rounded-xl'
			 >
				<h1 className='text-xl font-semibold mb-4'>send your Message</h1>
				<div className='flex flex-col mb-4  justify-center'>
					<label className='block text-black '>
						FullName


					</label>
					<input {...register("name", { required: true })} type="text" className="rounded-lg shadow appearance-none border  py-2 px- text-gray-500 leading-tight  focus:outline-none focus:shadow-outline"
					id="name"
					name="name"
					placeholder="Enter your name"



					/>
					{errors.name && <span>This field is required</span>}
				</div>
				<div className='flex flex-col mb-4  justify-center'>
					<label className='block text-black '>
						Enter Your Email


					</label>
					<input {...register("email", { required: true })} type="text" className="rounded-lg shadow appearance-none border  py-2 px- text-gray-500 leading-tight  focus:outline-none focus:shadow-outline"
					id="email"
					name="email"
					placeholder="Enter your Email"


					/>
					{errors.email && <span>This field is required</span>}
				</div>
				<div className='flex flex-col mb-4  justify-center'>
					<label className='block text-black '>
						Message


					</label>
					<textarea {...register("email", { required: true })} type="text" className="rounded-lg shadow appearance-none border  py-2 px- text-gray-500 leading-tight  focus:outline-none focus:shadow-outline"
					id="name"
					name="message"
					placeholder="Enter your Message"


					/>
					{errors.message && <span>This field is required</span>}
				</div>
				<button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Send</button>
			</form>
		</div>
	</div>
	</>
  )
}

export default Contaact
