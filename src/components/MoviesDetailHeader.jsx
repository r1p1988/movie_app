import React, { Fragment } from "react";

import "../MoviesDetailHeader.css";

// import Genres from "./Genres";

import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { Link } from "react-router-dom";
import Casts from "./Casts";

function MoviesDetailHeader() {
  const linkStyle = {
    fontWeight: 700,
  };

  const ImgUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces`;

  const { id } = useParams();
  const { movie } = useMovie(id);

  const URL = ImgUrl + movie.backdrop_path;

  let now = new Date(movie.first_air_date);
  let newdate = now.getFullYear();

  return (
    <Fragment>
      <div className="header first" style={{ backgroundImage: `url(${URL})` }}>
        <div className="custom_bg">
          <section className="inner">
            <div className="poster_wrapper">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt=""
                className="poster1"
              />
            </div>
            <div className="header_poster_wrapper">
              <section className="header poster1">
                <div className="title">
                  <h2>
                    {/* <a href="">{movie.name}</a> */}
                    <Link
                      className="text-link"
                      to={`/${movie.id}`}
                      style={linkStyle}
                    >
                      {movie.name}
                    </Link>
                    <span className="release_date">({newdate})</span>
                  </h2>
                  <div className="facts">
                    {/* <span className="genres"></span> */}
                    <span className="genres">
                      {movie.genres &&
                        movie.genres.map((item) => (
                          <Link className="text-link" key={item.id}>
                            {item.name}
                          </Link>
                        ))}
                    </span>
                    <span className="runtime"></span>
                  </div>
                  <div className="header_info">
                    <h3>Overview</h3>
                    <div className="overview">
                      <p>{movie.overview}</p>
                    </div>
                    <ol className="people no_image">
                      {movie.created_by &&
                        movie.created_by.map((item) => (
                          <li key={item.id}>
                            <p>
                              <Link className="text-link">{item.name}</Link>
                            </p>
                            <p>Creator</p>
                          </li>
                        ))}
                    </ol>
                  </div>
                  <div>
                    <h3>IMDB RATING</h3>
                    <div className="score">
                      {movie.vote_average && movie.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="content_wrapper"> */}
      <Casts />
      {/* </div> */}
    </Fragment>
  );
}

export default MoviesDetailHeader;
