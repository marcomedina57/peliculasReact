import React from 'react'

export const Temporada = ({episodio}) => {
  return (
    <div className="card mb-3">
    <div className="row row-cols-1">
        <div className="col-md-4">
        <img src= {episodio.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} 
        className="img-fluid rounded-start" alt="..."/>
        </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Temporada: {episodio.number}</h5>
                    <div className = "d-flex flex-column">
                      {episodio.episodios.map((episodio) => {
                        return <a className = "text-primary"> {episodio.nombre} </a>
                      })}

                    </div>
                </div>
            </div>
    </div>
    
</div>
  )
}
