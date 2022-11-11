import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../public/pelicula.png';
import { useBusqueda } from '../hooks/useBusqueda';
export const Navbar = ({buscarPelicula}) => {
  
  
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState('');

    const [isDisabled, setDisabled] = useState(true);

    useEffect(() => {
        busqueda.length <= 3 ? setDisabled(true) : setDisabled(false)
    
     
    }, [busqueda])
    

    
    const actualizarBusqueda = ( event) => {

        
        setBusqueda(event.target.value);
    }

    const buscar = async(e) => {

        e.preventDefault();

        if (busqueda.trim().length < 1 ) {
            return;
        }

        // TODO: buscar
        await buscarPelicula(busqueda);


    }

    return (



    <nav className="navbar navbar-dark bg-dark">
         <div className="container-fluid d-flex justify-content-around">
            <img  height = "80" width="110" src= {Logo}/>
            
            <form className="d-flex">
                <input value = {busqueda} onChange = {actualizarBusqueda} className="mr-3 form-control" type="text" placeholder="Search" />
                &nbsp
                <button disabled = {isDisabled} onClick={ buscar} className="pr-3 ml-3 btn btn-primary">Search</button>
            </form>
        </div>
    </nav>
  )
}
