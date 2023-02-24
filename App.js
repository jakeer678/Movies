import { Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import './App.css'
import AddFavourite from './comp/AddFavourite';
import Heding from './comp/Heding';
import MovieList from './comp/MovieList';
import Search from './comp/Search';

const App = () => {
const [movies, setMovies] = useState([]);
const [searchValue, setSearchValue] = useState('')
const [favourites, setFavourites] = useState([]);


const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();


    if(responseJson.Search) {
        setMovies(responseJson.Search)
        console.log(responseJson.Search)
    }
}
const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);


  const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

useEffect(()=>{
    getMovieRequest(searchValue);
},[searchValue])




  return (
    <div className='container-fluid movie-app'>
    <div className='headers' >
      <Heding heading="Movies"/>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
      <div className='row'>
       <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie} />
      </div>
      <div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={Remove}
				/>
			</div>
    </div>
  )
}

export default App
