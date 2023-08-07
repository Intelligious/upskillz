import React, { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlePageLoadAnimation = () => {
      setVisible(true);
    };

    handlePageLoadAnimation();

    const handleScroll = () => {
      const element = document.getElementById("about");
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
    <div className="container mt-5" id="aboutus">
      <div className="row justify-content-center align-items-center">
        <div
          className={`col-12 col-md-6 ${visible ? "fade-in-left" : ""}`}
          id="about"
        >
          <img src="images/Group 239.png" className="img-fluid" alt="Landing" />
        </div>
        <div
          className={`col-12 col-md-6 text-center text-md-start mt-5 mt-md-0 ${
            visible ? "fade-in-left" : ""
          }`}
          id="about"
        >
          <h3>A bit </h3>
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="https://wa.me/qr/OMQQ3XE7LQFPB1" target="_blank">
            <button className="hero__button">Let’s Talk</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
