import React from "react";

import "../Dashboard.css";

import { Link } from "react-router-dom";

// import getMoviesImg from "../services/moviesServices";

export default function Item({ movie }) {
  //   const MoviesImg = async () => {
  //     const data = await getMoviesImg(movie.id);
  //     console.log(data);
  //   };

  //   const Img = `https://api.themoviedb.org/3/tv`;
  //   const url = Img + `/${movie.id}`;

  // let now = new Date(movie.first_air_date);
  // let newdate = now.getDate() + "." + now.getMonth() + "." + now.getFullYear();

  return (
    <div className="card style_1">
      <div className="image">
        <div className="wrapper">
          {/* <Link to={`/${movie.id}`}> */}
          <Link
            to={{
              pathname: `/${movie.id}`,
              state: {
                movie: { movie },
              },
            }}
          >
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt=""
            ></img>
          </Link>
        </div>
      </div>
      {/* <div className="content">
        <h2>{movie.name}</h2>
        <p>{newdate}</p>
      </div> */}
    </div>
  );
}
