import React from "react";
import ReactStars from "react-rating-stars-component";
const NvBar = ({ text, change, ratingChanged, star }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to your Movies Home</h1>
      <br />
      <hr style={{ color: "white" }} />
      <form action="">
        <input type="text" value={text} onChange={change} />
      </form>
      <div style={{ display :"flex" , justifyContent :"center"}}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={star}
        />
      </div>
      ,
    </div>
  );
};

export default NvBar;