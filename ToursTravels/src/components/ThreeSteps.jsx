import React from "react";
import cardImage from "../assets/trip.jpg"; // put a sample image at src/assets/trip.jpg or change path

const Step = ({ color, title, children, icon }) => (
  <div className="step">
    <div className="step-icon" style={{ background: color }}>
      {/* use provided icon (SVG) */}
      <span dangerouslySetInnerHTML={{ __html: icon }} />
    </div>
    <div className="step-body">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </div>
);

export default function ThreeSteps() {
  return (
    <section className="three-steps">
      <div className="container steps-grid">
        <div className="steps-left">
          <p className="kicker">Easy and Fast</p>
          <h2 className="big-title">Book Your Next Trip <br /> In 3 Easy Steps</h2>

          <div className="steps-list">
            <Step
              color="#f6be3a"
              title="Choose Destination"
              icon={`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white"/></svg>`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
            </Step>

            <Step
              color="#f57b50"
              title="Make Payment"
              icon={`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="20" height="14" rx="2" fill="white"/><path d="M2 10H22" stroke="#fff" stroke-width="1.2"/></svg>`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
            </Step>

            <Step
              color="#1f86a8"
              title="Reach Airport on Selected Date"
              icon={`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16L22 6" stroke="white" stroke-width="1.5"/><path d="M7 21L11 13" stroke="white" stroke-width="1.5"/></svg>`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
            </Step>
          </div>
        </div>

        <div className="steps-right">
          <div className="card">
            <img src={cardImage} alt="Trip to Greece" className="card-image" />
            <div className="card-body">
              <h3>Trip To Greece</h3>
              <div className="card-meta">14–29 June | by Robbin Joy</div>

              <div className="card-foot">
                <div className="people">24 people going</div>
                <button className="like">♡</button>
              </div>
            </div>

            <div className="badge">
              <div className="badge-avatar" />
              <div className="badge-text">
                <strong>Ongoing</strong>
                <div className="badge-sub">Trip to Rome <span className="progress">40% completed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
