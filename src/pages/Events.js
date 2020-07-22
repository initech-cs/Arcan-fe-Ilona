import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Calendar from "../components/Calendar"

function Events() {
  return (
    <div>
      <Navbar />

      <div className="calendar">
          <Calendar />
      </div>

      <div>
        <h2>Upcoming Events</h2>
      </div>

      <div>
        <h2>Book the Venue</h2>
      </div>

      <Footer />
    </div>
  );
}

export default Events;
