import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// function Room({ room }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className="row bs">
//       <div className="col-md-4">
//         <img src={room.imageurls[0]} className="smalling" />
//       </div>
//       <div className="col-md-7 ">
//         <h1>{room.name}</h1>
//         <b>
//           {" "}
//           <p>Max Count : {room.maxcount}</p>
//           <p>Phone Number : {room.phonenumber}</p>
//           <p>Type : {room.type}</p>
//         </b>
//         <div style={{ float: "right " }}>
//           <button className="btn btn-primary">View Details</button>
//         </div>
//       </div>

//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onclick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

function Room({ room }) {
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          {""}
          <p>Max Count : {room.maxcount}</p>
          <p>Phone Number : {room.phonenumber}</p>
          <p>Type: {room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          <button className="btn btn-primary">Részletek</button>
        </div>
      </div>
    </div>
  );
}

export default Room;
