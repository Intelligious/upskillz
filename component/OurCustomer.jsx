import { Card, CardContent, CardMedia, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const OurCustomer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlePageLoadAnimation = () => {
      setVisible(true);
    };

    handlePageLoadAnimation();

    const handleScroll = () => {
      const element = document.getElementById("projects");
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-color " id="projects">
      <div className="container mt-4 pb-4">
        <div className="row ">
          <div className="col-12 text-center mt-5">
            <h2>Our Recent Work By Our Experts</h2>
            <p className="w-md-50 mx-auto ">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
          <div
            className={`col-12 col-md-4 mt-3 ${visible ? "fade-in-down" : ""}`}
            id="projects"
          >
            <Card className="card">
              <CardMedia
                className="p-2"
                component="img"
                image="images/Group 2034.png"
                alt="Paella dish"
              />
              <CardContent className="d-flex">
                <h3 className="me-auto">Web & Mobile App</h3>
                <div className="card-button">View Work</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCustomer;
