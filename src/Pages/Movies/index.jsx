import React, { useContext } from "react";
import MovieCard from "../../components/MovieCard";
import { text } from "./style.modules.css";
import { MoviesContext } from "../../components/Store/MoviesContextProvider";

export default function Movies() {
  let { moviesData } = useContext(MoviesContext);
  return moviesData
    .filter((movie) => movie.title && movie.poster_path)
    .map((movie) => <MovieCard movie={movie} key={movie.id} />);
}
