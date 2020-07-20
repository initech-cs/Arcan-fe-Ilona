import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Landing() {
  return (
    <div>
      <div className="landMain">
        <Navbar />

        <div className="landDiv">Landing Page</div>

        <Footer />
      </div>
    </div>
  );
}

export default Landing;
