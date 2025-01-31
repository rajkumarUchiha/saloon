import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajkumar </span>
            from <span className="purple"> Madurai, India.</span>
            <br />I am a under graduate student in NMSSVN college,Nagamalai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "get Inspired or inspire others"{" "}
          </p>
          <footer className="blockquote-footer">Rajkumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
