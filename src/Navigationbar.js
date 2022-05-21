import React, { useState, useContext } from "react";
import useClipboard from "react-use-clipboard";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import me from "./images/me.jpg";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import Header from "./images/header.jpg";

function Navigationbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isCopied, setCopied] = useClipboard("giga05091@hotmail.com", {
    successDuration: 1000,
  });

  const [canvas, setCanvas] = useState(false);
  const handleClose = () => setCanvas(false);
  const handleShow = () => setCanvas(true);

  const [contactCanvas, setContactCanvas] = useState(false);
  const handleCloseContact = () => setContactCanvas(false);
  const handleShowContact = () => setContactCanvas(true);

  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand className="themetoggler">
          {theme === "light" ? (
            <FontAwesomeIcon
              onClick={toggleTheme}
              className="moon-icon"
              icon={faMoon}
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleTheme}
              className="sun-icon"
              icon={faSun}
            />
          )}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="navbartext" onClick={handleShow}>
            About me
          </Nav.Link>
          <p className="navbar-gap">|</p>
          <Nav.Link className="navbartext" onClick={handleShowContact}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
        <div fluid className="header-container">
          <img className="img-fluid shadow-4" src={Header}></img>
          <p className="typing-effect">Hi,I'm Attila.I'm a React dev.</p>
        </div>
      <Offcanvas className={theme} show={canvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{ fontSize: "2rem", color: "rgb(24,105,253)" }}
          >
            <FontAwesomeIcon className="address-icon" icon={faPerson} />
            About me
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvas-body">
          <img src={me} className="pictureofme" />
         <p className="aboutmetext"> Hello,my name is Attila and I am a self-taught React web developer.
          I've always been interested in making websites,back in middle
          school I used to fool around in HTML. Years later,when COVID started
          in 2019 I was stuck at home in quarantine and trying to figure out
          what to do.That's when my friend told me I should learn
          something.I looked up how to start making websites,bought the Zero To
          Mastery course on Udemy and fell in love with coding. Ever since then
          I'm through a few Udemy courses,hundreds of YouTube videos and coding
          sites like CodeCademy or FreeCodeCamp.My goal is to work as a web
          developer and make great websites,in a team where I can learn even
          more from people who's been doing this for years and pick up some tips
          and tricks.
          </p>
          <p  style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            <br></br>
            So far I've learned and/or used:
          </p>
          <ul class="list-group list-group-flush">
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              HTML,JavaScript,CSS
            </li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>React</li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              {" "}
              Multiple NPM packages like<br></br> React Router,Axios
              etc.
            </li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              Git bash,GitHub
            </li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              Bootstrap
            </li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              Functional React and hooks
            </li>
          </ul>
          <ul class="list-group list-group-flush">
            <li className={`list-group list-group-flush ${theme}`}> </li>
          </ul>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            And currently learning:
          </p>
          <ul class="list-group list-group-flush">
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>
              Typescript
            </li>
            <li className={`list-group list-group-flush ${theme} aboutmetext`}>MongoDB</li>
          </ul>
          <br></br>
          Thank you for checking out my portfolio page!
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={contactCanvas} onHide={handleCloseContact}>
        <Offcanvas.Header className={theme} closeButton>
          <Offcanvas.Title
            style={{ fontSize: "2rem", color: "rgb(24,105,253)" }}
          >
            <FontAwesomeIcon className="address-icon" icon={faAddressBook} />
            Contact
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className={`canvas-body ${theme}`}>
          <ul className={`list-group list-group-flush ${theme}`}>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <li
              className={`list-group-item ${theme}`}
              style={{ fontSize: "1.2rem" }}
            >
              GIGA05091@HOTMAIL.COM
              {isCopied ? (
                <FontAwesomeIcon
                  className="clipboardbutton"
                  icon={faClipboardCheck}
                  onClick={setCopied}
                />
              ) : (
                <FontAwesomeIcon
                  className="clipboardbutton"
                  icon={faClipboard}
                  onClick={setCopied}
                />
              )}
            </li>
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <li
              className={`list-group-item ${theme}`}
              style={{ fontSize: "1.5rem" }}
            >
              <a href="https://github.com/Hydra0509" target="_blank">
                Github
              </a>
            </li>
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <li
              style={{ fontSize: "1.5rem" }}
              className={`list-group-item ${theme}`}
            >
              <a
                href="https://www.facebook.com/attila.kovacs.319"
                target="blank"
              >
                Facebook
              </a>
            </li>
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <li
              style={{ fontSize: "1.5rem" }}
              className={`list-group-item ${theme}`}
            >
              <a
                href="https://www.linkedin.com/in/attila-kov%C3%A1cs-6016a3227/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className={`list-group list-group-flush ${theme}`}> </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigationbar;
