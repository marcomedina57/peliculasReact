import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Cast } from './components/Cast'
import { Episodes } from './components/Episodes'
import { MovieDetail } from './components/MovieDetail'

export const AppRouter = () => {
  return (
    
    <Routes>

        <Route path = "/" element = {<App/>}/>
        <Route path = "/movie/:id" element = { <MovieDetail/>}>
            <Route
                path = "episodes" element = {<Episodes/>}
            />
            <Route
                path = "cast" element = {<Cast/>}
            />
        </Route>

    </Routes>

  )
}
