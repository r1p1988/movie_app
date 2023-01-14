import { useState, useEffect } from "react";
import { getMovies } from "../services/moviesServices";

export default function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMovies();
      setMovies(data.results);
    })();
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await fetch(
  //           `https://api.themoviedb.org/3/tv/popular?api_key=596d86bfcc6d8b3a429b1a0de647aa1f&language=en-US`
  //         );
  //         const data = await response.json();
  //         // console.log(data.results);
  //         setMovies(data.results);
  //       } catch (err) {
  //         console.log("Error occured when fetching books");
  //       }
  //     })();
  //   }, []);

  return { movies };
}
