import React from 'react'
import { Movie } from './Movie';

export const Movies = ({movies, textoBuscar}) => {

  return (
    <div className="container mt-5 mb-5">
        <h4 className = "text-center"> {textoBuscar}</h4>

        <div className="row row-cols-1 row-cols-md-3 g-2 d-flex justify-content-around" >
            
        
            {movies.map((num) => <Movie key = {num.id} movie = {num}/>)}
        
        </div>
        
    </div>
  )
}
