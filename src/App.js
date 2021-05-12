import "./App.css";

function App() {
  // TODO: add drop to nights, adults, rooms
  // TODO: firstName, lastName, email in text inputs.
  // take inputs and put them into React.state.
  return (
    <div>
      <header>
        <h1>Hotel Booking App</h1>
      </header>
      <form className="main-container">
        <label for="destination">Destination:</label>
        <input type="text" id="destination" value="Paris, Tokyo..etc" />
        <label for="d-date">Departure Date:</label>
        <input type="date" id="d-date" name="d-date" />
        <label for="a-date">Arrival Date:</label>
        <input type="date" id="a-date" name="a-date" />
      </form>
      <input type="submit" value="Submit" />
    </div>
  );
}

export default App;
