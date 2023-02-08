import React, { useState } from 'react'
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

const Movie = ({ item }) => {
	const [bookmark, setBookmark] = useState(false)

	return (
		<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
			<img
				className="w-full h-auto block rounded"
				src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
				alt={item?.title}
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 transition-all opacity-0 hover:opacity-100 text-white">
				<p className="white-space-normal text-xs md:text-sm flex justify-center items-center h-full text-center">
					{item?.title}
				</p>
				<p>
					{bookmark ? (
						<BsBookmarkCheckFill className="absolute top-4 right-4 text-gray-300" />
					) : (
						<BsBookmarkCheck className="absolute top-4 right-4 text-gray-300" />
					)}
				</p>
			</div>
		</div>
	)
}
export default Movie
