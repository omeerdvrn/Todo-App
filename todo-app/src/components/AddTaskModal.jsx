import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddTaskModal() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTaskCreation = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/v1/tasks",
      data: {
        title: title,
        completed: "no",
        endDate: date,
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
      <Button variant="success" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Title : </label>
            <input
              className="form-group-item"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
                // console.log(`Title value has changed to ${e.target.value}!`);
              }}
            />
            <br />
            <label>End Date: </label>
            <input
              type="date"
              name="endDate"
              id=""
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            {/* <label>Description</label>
            <input className="form-group-item" type="text" name="" id="" /> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleTaskCreation}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModal;
