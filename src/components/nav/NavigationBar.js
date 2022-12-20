import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./nav.module.css";
import auto from "../../assets/img/auto.png";

const NavigationBar = ({ onToggleAudio, onIsAudioOn }) => {
  const displayAudioIcon = onIsAudioOn ? (
    <span class="material-symbols-outlined" onClick={onToggleAudio}>
      volume_up
    </span>
  ) : (
    <span class="material-symbols-outlined" onClick={onToggleAudio}>
      volume_off
    </span>
  );

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          collapseOnSelect={"true"}
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <div className={classes["container-title"]}>
                <img className={classes["img-title"]} src={auto} alt="" />
                <h1 className={classes["title"]}>In Memoriam </h1>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1 className={classes["title"]}>In Memoriam </h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 ">
                  <Nav.Link
                    onClick={() => {
                      let element = document.getElementById("intro");
                      element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {" "}
                    <p className={classes.text}>Ein Paar Worte</p>
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      let element = document.getElementById("galerie");
                      element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <p className={classes["text"]}>Galerie</p>
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      let element = document.getElementById("danke");
                      element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <p className={classes["text"]}>Dankeschön</p>
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      let element = document.getElementById("spenden");
                      element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <p className={classes["text"]}>Spenden</p>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className={classes.icon}> {displayAudioIcon}</div>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
