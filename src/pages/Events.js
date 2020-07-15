import React from "react";

import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar"

function Events() {
  return (
    <div>
      <Navbar />

      <div className="calendar">
          <Calendar />
      </div>
    </div>
  );
}

export default Events;
