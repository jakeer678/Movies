import React from "react";
import '../App.css'
import AddFavourite from "./AddFavourite";


const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="imgage_container" key={index}>
        <div>
        <img src={movie.Poster} alt=""></img>
        <div className="favourites">
       <div onClick={()=> props.handleFavouriesClick(movie)}>
        Add Favourite
       </div>
        <FavouriteComponent />
       </div>
        </div>
        
        </div>
      ))}
    </>
  );
};

export default MovieList;
