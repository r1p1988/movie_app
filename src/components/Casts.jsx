import React from "react";
import { Link, useParams } from "react-router-dom";
import useCasts from "../hooks/useCasts";

import "../MoviesDetailHeader.css";

import no_image from "../components/images/no_image.png";

function Casts() {
  const { id } = useParams();
  const { cast } = useCasts(id);
  console.log(cast);
  return (
    <div className="scroller_wrap">
      <h3>Series Cast</h3>
      <ol className="people scroller">
        {cast.cast &&
          cast.cast.map((item) => (
            <li className="card" key={item.id}>
              <Link>
                <img
                  loading="lazy"
                  src={
                    item.profile_path
                      ? `https://www.themoviedb.org/t/p/w138_and_h175_face/` +
                        item.profile_path
                      : no_image
                  }
                  alt={item.name}
                />
              </Link>

              <p>
                <Link>{item.name}</Link>
              </p>

              <p>{item.character}</p>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Casts;
