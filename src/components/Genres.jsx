import React from "react";
// import useGenres from "../hooks/useGenres";

import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

function Genres() {
  //   const getGenreName = () => {};

  const { id } = useParams();
  const { movie } = useMovie(id);
  console.log(id);
  console.log(movie);

  const MovieGenre = movie.genres;
  return (
    <span className="genres">
      {MovieGenre.map((item) => item.name)}
      {/* {movie.genres.map((item) => (
        <Link>{item.name}</Link>
      ))} */}
    </span>
  );
}

export default Genres;
