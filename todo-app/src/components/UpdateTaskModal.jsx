import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UpdateTaskModal(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTaskUpdate = () => {
    axios({
      method: "PUT",
      url: "http://localhost:8080/v1/tasks/" + props.id,
      data: {
        title: title,
        completed: props.completed,
        creationDate: props.creationDate,
        endDate: props.endDate,
      },
    })
      .then((e) => {
        console.log(e);
        handleClose();
      })
      .catch((e) => {
        console.log("error: " + e);
      });
  };

  return (
    <>
      <Button className="btn btn-primary btn-sm" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Title : </label>
            <input
              className="form-group-item"
              type="text"
              value={title === "" ? props.title : title}
              onChange={(e) => {
                if (e.target.value !== "") setTitle(e.target.value);
                console.log(`Title value has changed to ${e.target.value}!`);
              }}
            />
            <input
              type="date"
              name="endDate"
              id=""
              value={date === "" ? props.endDate : date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleTaskUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateTaskModal;
