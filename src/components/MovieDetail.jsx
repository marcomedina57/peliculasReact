import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import pelicula from '../../public/pelicula.png';


const colorActive = {
    textDecoration: "underline"
}

export const MovieDetail = () => {
const {id} = useParams();
const navigate = useNavigate();
    const [tab, setTab] = useState("episodes");



 useEffect(() => {
   
    navigate(tab);
   
 }, [tab])

 
 const homeButton = () => {
    console.log('si');
    navigate('/');

}


  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-around">
            <img onClick={homeButton} src= {pelicula} alt="" width="120" height="80" className=""/>
        
            <p className = "text-white"> Informacion de tus peliculas favoritas</p>
         </div>
        </nav>
        <div className="container d-flex justify-content-center">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink
                        onClick = {() => setTab("episodes")}
                        to="episodes"
                        style={({ isActive }) =>
                        isActive ? colorActive  : undefined
                        }
                     >
                         Episodios
                     </NavLink>
                </li>
                &nbsp;
                &nbsp;
                &nbsp;
                <li className="nav-item">
                <NavLink
                        onClick = {() => setTab("cast")}
                        to="cast"
                        style={({ isActive }) =>
                        isActive ? colorActive  : undefined
                        }
                     >
                         Elenco
                     </NavLink>
                </li>
                
            </ul>

        </div>
        <Outlet context={id}/>

    </>
  )
}
