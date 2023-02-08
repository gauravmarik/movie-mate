import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {
	const [movies, setMovies] = useState([])

	const movie = movies[Math.floor(Math.random() * movies.length)]

	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data.results)
		})
	}, [])
	console.log(movie)

	// const truncateString = (str, num) => {
	// 	if (str?.length > num) {
	// 		return str.slice(0, num) + '...'
	// 	} else {
	// 		return str
	// 	}
	// }

	return (
		<div className="w-full h-[550px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover rounded"
					src={`https://image.tmdb.org/t//p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className="absolute w-full top-[40%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl ">{movie?.title}</h1>
					<div className="my-4">
						<button className="bg-red-600 text-white py-1 px-5 rounded">
							Play
						</button>
						<button className="border text-white  border-gray-300 py-1 px-5 ml-4 rounded">
							Watch Later
						</button>
					</div>
					<p className="text-gray-400 text-sm">
						Released: {movie?.release_date}
					</p>
					<p className="w-full  text-gray-200">{movie?.overview}</p>
					{/* md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] */}
					{/* <p className="w-full  text-gray-200">
						{truncateString(movie?.overview, 150)}
					</p> */}
				</div>
			</div>
		</div>
	)
}
export default Main
