import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddingMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   ------------------------------------------------------

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newobj = {
      id: Math.random(),
      img: image,
      title: name,
      text: desc,
      rating: rate,
    };

    if (image && name && desc && rate) {
      add(newobj);
    } else {
      alert(" there is a Missing information ");
    }
    setImage("");
    setName("");
    setDesc("");
    setRate("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie-img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Img-url"
                autoFocus
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie-title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie-rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="rate"
                autoFocus
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ marginRight: "40px", marginLeft: "20px" }}
            >
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddingMovie;
