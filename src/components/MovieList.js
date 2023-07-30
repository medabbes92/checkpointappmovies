import React from "react";
import MovieDesc from "./MovieDesc";

const MovieList = ({ tab, del, text, star }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "50px",
      }}
    >
      {tab
        .filter(
          (el) =>
            el.title.trim().toUpperCase().includes(text.trim().toUpperCase()) &&
            el.rating >= star
        )
        .map((el) => (
          <MovieDesc key={el.id} el={el} del={del} />
        ))}
    </div>
  );
};

export default MovieList;