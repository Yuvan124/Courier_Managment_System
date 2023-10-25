
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

import React from "react";
import { Container } from "react-bootstrap";

import 'react-multi-carousel/lib/styles.css';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About us</h2>
              <p>Our knowledge and experience working at the world's largest carriers allow us to level the playing field during carrier rate negotiations. The majority of our clients routinely save up to 35% on their small parcel shipping, and perhaps the best part is that our clients typically retain 90 to 95% of the savings we help them achieve. More savings than anyone else in the industry.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src='https://www.kmcargoservices.com/images/blogs/Logistic-Business-India.jpg' alt="Image" />
                </div>
                <div className="item">
                  <img src='https://speedairlogistics.com/blog/img/international.jpg' alt="Image" />
                </div>
                <div className="item">
                  <img src='https://www.fwdfreight.com/wp-content/uploads/2020/12/freight-2.jpg' alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
