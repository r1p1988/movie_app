import { useState, useEffect } from "react";

import { getGenres } from "../services/moviesServices";

function useGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getGenres();
      setGenres(data);
    })();
  }, []);
  return { genres };
}

export default useGenres;
