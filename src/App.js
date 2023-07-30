import { useState } from "react";
import "./App.css";
import { movies } from "./components/Data";
import NvBar from "./components/Navelemnt";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddingMovie from "./components/AddingMovie";

function App() {
  const [movie, setMovie] = useState(movies);
  const [text, setText] = useState("");
  const [star, setStar] = useState(1);

  const ratingChanged = (newRating) => {
    setStar(newRating);
  };

  const handleDelete = (id) => {
    setMovie(movie.filter((el) => el.id !== id));
  };

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const handleadd = (newobj) => {
    setMovie([...movie, newobj]);
  };

  return (
    <div className="App">
      <NvBar
        text={text}
        change={handlechange}
        ratingChanged={ratingChanged}
        star={star}
      />
      <MovieList tab={movie} del={handleDelete} text={text} star={star} />
      <AddingMovie add={handleadd} />
    </div>
  );
}

export default App;
