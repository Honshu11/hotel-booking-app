import React from "react";
import "./App.css";

function ConfirmationModal(props){
  console.log(props.bookingInformation);
  return(
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-body">
            <h2>Testing</h2>
          </div>
        </div>
      </div>
    </div>
  )
}



export default ConfirmationModal;
