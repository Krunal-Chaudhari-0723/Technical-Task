import React from "react";
import play from '../assets/bothImages.png'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT BRAND */}
        <div className="footer-brand">
          <h2 className="brand-title">Jadoo.</h2>
          <p className="brand-desc">
            Book your trip in minute, get full <br />
            control for much longer.
          </p>
        </div>

        {/* MIDDLE 3 COLUMNS */}
        <div className="footer-cols">
          <div className="col">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>

          <div className="col">
            <h3>Contact</h3>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>

          <div className="col">
            <h3>More</h3>
            <p>Airlines</p>
            <p>Airline fees</p>
            <p>Low fare tips</p>
          </div>
        </div>

        {/* RIGHT SOCIAL + APP */}
        <div className="footer-right">
          <div className="social-row">
            <span className="icon">⚪</span>
            <span className="icon">📸</span>
            <span className="icon">🐦</span>
          </div>

          <p className="discover">Discover our app</p>

          <div className="app-buttons">
            <img src={play  } alt="google-play" style={{height:120, textAlign:"right", marginRight:-60}}/>
            {/* <img src={play} alt="app-store" /> */}
          </div>
        </div>
      </div>

      <div className="copy">
        All rights reserved © jadoo.co
      </div>
    </footer>
  );
}