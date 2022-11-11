import React from 'react'
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useBusqueda } from '../hooks/useBusqueda';
import { Personaje } from './Personaje';

export const Cast = () => {
  
  const id = useOutletContext();
  const { detalleCast, cast } = useBusqueda();
  useEffect(() => {
    
    detalleCast(id);
    
  }, [])
  return (
    <div className = "container">

      {cast.map((personaje) => <Personaje key = {personaje.id} personaje = {personaje}/>)}

    </div>
  )
}