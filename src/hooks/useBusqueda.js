import { useState } from "react"
import { BASEURL } from "../api/api";


export const useBusqueda = (initialState = []) => {
  

    const [peliculas, setMovies] = useState(initialState);
    const [episodios, setEpisodios] = useState(initialState);
    const [cast, setCast] = useState(initialState);
    const [textoBuscar, setTexto] = useState('');



    const busqueda = async(title) => {

        let movies = await fetch(`${BASEURL}search/shows?q=${title}`);

        movies = await movies.json();

        setTexto(title);

       
        movies = movies.map((movie) => {
            return {
                nombre: movie.show.name,
                image: movie.show.image?.medium,
                genero: movie.show.genres,
                id: movie.show.id,
                resumen: movie.show.summary.replace("<p>", "").replace("</p>", "").replace("<b>", "").replace("</b>", "").slice(0, 150) + "..."
                
            }
        })


        setMovies([...movies]);
        console.log(peliculas);

    }


    const detalleCast = async(id) => {

        let cast = await fetch(`${BASEURL}shows/${id}/cast`);

        cast = await cast.json();

       
        cast = cast.map((cast) => {
            return {
                nombre: cast.person.name,
                imagen: cast.person.image?.medium,
                id: cast.person.id
                
            }
        })


        setCast([...cast]);

    }

    const detallePelicula = async(id) => {

        let movies = await fetch(`${BASEURL}shows/${id}/seasons`);

        movies = await movies.json();

        movies = await Promise.all(movies.map(async(season) => {

            let episodes = await fetch(`${BASEURL}seasons/${season.id}/episodes`);
            episodes = await episodes.json();

            return {
                id: season.id,
                imagen: season.image?.medium,
                number: season.number,
                episodios: episodes.map((episode) => {
                    return {
                        nombre: episode.name,
                        imagen: episode.image?.medium
                    }
                }) 
            }

        }))

        setEpisodios(movies);

    }



    return {


        busqueda,
        peliculas,
        detallePelicula,
        episodios,
        detalleCast,
        cast,
        textoBuscar

    }


}
