import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ParcelBooking from './ParcelBookingApp';
import './Project.css';
import Track from './Track';

function Projects() {
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Parcel</h2>
                  <p>A myriad of tracking systems exists. Some are 'lag time' indicators, that is, the data is collected after an item has passed a point for example a bar code or choke point or gate</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Take Parcel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Track Parcel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Detials</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane className="ee" eventKey="first">
                        <Row>
                         
                    <Col md={6}>
                 <ParcelBooking />
                       </Col>
                         
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane className="ee" eventKey="second">
                      <Row>
                         
                         <Col md={6}>
                      <Track />
                            </Col>
                              
                             </Row>
        
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> A myriad of tracking systems exists. Some are 'lag time' indicators, that is, the data is collected after an item has passed a point for example a bar code or choke point or gate.[1] Others are 'real-time' or 'near real-time' like Global Positioning Systems (GPS) depending on how often the data is refreshed. There are bar-code systems which require items to be scanned and automatic identification (RFID auto-id). For the most part, the tracking worlds are composed of discrete hardware and software systems for different applications</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}

export default Projects;
