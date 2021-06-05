import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import "./App.css";

// MAIN TAKEAWAYS FROM PROJECT:
// For this project you'll be creating a simple hotel booking application. A user who wants to book at the hotel will fill out some basic form fields and will be shown a confirmation message.




// TODO: pass info through as props to the confirmation modal.
// TODO: try to display info
// TODO: have modal prop to confirm or deny infomation
// TODO: Pressing the "confirm" button, a modal should pop up the screen confirming the user's selection.
// TODO: Lastly, style the page to best of your ability.

 

// The application should have three components:
//  App.js
//    -contains state.
//  BookingForm.js
//    -No state.
//  ConfirmationModal.js
//    -No state.



function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [nights, setNight] = useState(1);

  console.log(firstName, lastName);

  function confirmBooking() {
    console.log(firstName, lastName, address, email, guests, rooms, nights);
  }

  return (
    <div className="main-container">
      <header className="main-header">
        <h1>Hotel Booking App</h1>
        <p>"The best hotel app on the web" -George Washington, probably.</p>
      </header>
      <form className="main-form">
        <div className="user-form-info">
          <label for="fName">First Name:</label>
          <input
            type="text"
            name="fName"
            id="fName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label for="lName">Last Name:</label>
          <input
            type="text"
            name="lName"
            id="lName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label for="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="user-room-info">
          <label for="rooms-select">Rooms:</label>
          <select
            id="rooms-select"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label for="guests-select">Guests:</label>
          <select
            id="guests-select"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <label for="night-select">Nights:</label>
          <select
            id="night-select"
            value={nights}
            onChange={(e) => setNight(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </form>
      <button
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modal-submit"
        onClick={confirmBooking}
      >
        Confirm
      </button>
      <ConfirmationModal />
    </div>
  );
}

export default App;


