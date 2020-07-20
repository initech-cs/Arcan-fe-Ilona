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

      <Footer />
    </div>
  );
}

export default Events;
