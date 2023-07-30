import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieDesc = ({ el, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "600px", margin: "30px" }}>
        <Card.Img
          variant="top"
          src={el.img}
          style={{ height: "300px", border: "solid black 1px" }}
        />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text style={{ height :"120px"}}>{el.text}</Card.Text>
          <div style={{ marginLeft: "85px", marginBottom: "30px" }}>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={el.rating}
            />
          </div>

          <Button
            style={{ marginRight: "30px" }}
            variant="danger"
            onClick={() => del(el.id)}
          >
            Delete
          </Button>
          <Button variant="primary">More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDesc;