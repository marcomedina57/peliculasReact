import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useBusqueda } from '../hooks/useBusqueda';
import { Temporada } from './Temporada';




export const Episodes = () => {
  
  const id = useOutletContext();
  const { detallePelicula, episodios } = useBusqueda();
  useEffect(() => {
    
    detallePelicula(id);
    
  }, [])
  return (
    <div className = "container">

      {episodios.map((episodio) => <Temporada key = {episodio.id} episodio = {episodio}/>)}

    </div>
  )
}
