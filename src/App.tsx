import React, { useEffect, useState } from 'react'
import {movieObj} from './components/movie'
import Header from './components/header'
import Main from './components/main';
import axios from 'axios';
import './App.css';

function App() {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Array<movieObj>>([]);

  useEffect(() => {
    getMovies(page);
  }, [page])

  const getMovies = async (pageNo:number) => {
    const jsonResponse = await axios.get(`https://ghibliapi.herokuapp.com/films?page=${pageNo}`)
    setMovies(jsonResponse.data)
  }

  return (
    <>
      <div className="App">
        <Header PageNo={page} />
        <Main movies={movies}/>     
      </div>
    </>
  );
}

export default App;
