import { useState, useEffect } from "react";

import { getCasts } from "../services/moviesServices";

function useCasts(id) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getCasts(id);
      setCast(data);
    })();
  }, [id]);
  return { cast };
}

export default useCasts;
