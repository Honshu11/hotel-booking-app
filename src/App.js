import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1>Hotel Booking App</h1>
        <p>"The best hotel app on the web" -George Washington, probably.</p>
      </header>
      <form className="main-form">
        <div className="user-form-info">
          <label for="fName">First Name:</label>
          <input type="text" name="fName" id="fName" />
          <label for="lName">Last Name:</label>
          <input type="text" name="lName" id="lName" />
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label for="address">Address:</label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="user-room-info">
          <label for="rooms-select">Rooms:</label>
          <select id="rooms-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label for="adult-select">Adults:</label>
          <select id="adult-select">
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
          <select id="night-select">
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
      <input type="button" className="btn btn-primary" value="Submit" />
    </div>
  );
}

export default App;

//TODO: Pressing the "confirm" button, a modal should pop up the screen confirming the user's selection. **More info on Scrimba, bootstrap.**
//TODO: Lastly, style the page to best of your ability.

// The application should have three components:
//  App.js
//    -contains state.
//  BookingForm.js
//    -No state.
//  ConfirmationModal.js
//    -No state.
