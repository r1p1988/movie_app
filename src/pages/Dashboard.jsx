import React from "react";

import "../Dashboard.css";

import useMovies from "../hooks/useMovies";
import Item from "../components/Item";

function Dashboard() {
  const { movies } = useMovies();

  //   if (movies.length === 0) return <div>Loading...</div>;

  //   <Fragment>

  return (
    <div className="page_wrapper">
      {movies.map((movie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Dashboard;
