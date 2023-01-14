import React from "react";

// import { useParams } from "react-router-dom";
// import useMovie from "../hooks/useMovie";

import MoviesDetailHeader from "../components/MoviesDetailHeader";

function MoviesDetail() {
  //   let now = new Date(movie.first_air_date);
  //   let newdate = now.getFullYear();

  //   const { id } = useParams();

  //   const { movie } = useMovie(id);
  //   console.log(movie);

  return <div>{<MoviesDetailHeader />}</div>;
}

export default MoviesDetail;
