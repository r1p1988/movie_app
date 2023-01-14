import { useState, useEffect } from "react";

import { getMovie } from "../services/moviesServices";

function useMovie(id) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMovie(id);
      setMovie(data);
    })();
  }, [id]);
  return { movie };
}

export default useMovie;
