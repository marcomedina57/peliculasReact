import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export const Movie = ({movie}) => {


    const naviate = useNavigate();
    
    const goToMovie = (id) => {
        
        naviate(`/movie/${id}`);

}


  return (
    <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0" onClick={() => goToMovie(movie.id)}>
                    <div className="col-md-4">
                    <img src= {movie.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} 
                    className="img-fluid rounded-start" alt="..."/>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.nombre}</h5>
                                <p className="card-text">{movie.genero.reduce((prev, act) => `${prev} ${act}`, '')}</p>
                                <p className="card-text"><small className="text-muted"> {movie.resumen} </small></p>
                            </div>
                        </div>
                </div>
                
    </div>
  )
}
