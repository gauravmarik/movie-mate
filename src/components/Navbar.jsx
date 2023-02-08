import React from 'react'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4 w-full z-[100] absolute">
			<h1 className="bg-red-600 text-white px-6 py-3 text-4xl font-bold cursor-pointer rounded mt-2">
				MovieMate
			</h1>
			<div>
				<button className="text-white pr-4 border border-gray-300 px-6 py-2 rounded">
					Sign In
				</button>
				<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ml-4">
					Sign Out
				</button>
			</div>
		</div>
	)
}
export default Navbar
