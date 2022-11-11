import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { Navbar } from './components/Navbar'
import { useBusqueda } from './hooks/useBusqueda';

function App() {
  const {busqueda: buscarPelicula, peliculas, textoBuscar} = useBusqueda();


  return (
    <>
      <Navbar buscarPelicula = {buscarPelicula}/>
      {peliculas.length < 1 ? <h3 className = "container text-center mt-5">No se ha encontrado ningun resultado o no se ha realizado ninguna busqueda</h3> : <Movies textoBuscar = {textoBuscar} movies = {peliculas}/>} 
      
    </>
  )
}

export default App
