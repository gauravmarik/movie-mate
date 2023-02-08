import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Movie from './Movie'

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results)
		})
	}, [fetchURL])
	console.log(movies)
	return (
		<div>
			<h2 className="text-white p-4">{title}</h2>
			<div className="relative flex items-center">
				<div
					id={'slider'}
					className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}
export default Row
