import React from "react";

const HeroSection = () => {
  return (
    <div className="container" id="home">
      <div className="row justify-content-center align-items-center fade-in-left">
        <div className="col-12 col-md-6 col-lg-6 text-center text-md-start">
          <h1>
            We <span>Help</span> you to grow <span>Business</span>
          </h1>
          <p className="mt-3">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>
          <div className="mt-5 ">
            <a href="https://wa.me/qr/OMQQ3XE7LQFPB1" target="_blank">
              <button className="hero__button">Let’s Talk</button>
            </a>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-6">
              <h3>Customized Websites</h3>
              <p className="mt-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-12 col-md-6  ">
              <h3>Customized Websites</h3>
              <p className="mt-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-none d-md-block text-center text-md-end fade-in-right">
          <img
            src="images/Group 2032.png"
            className="img-fluid"
            alt="Landing"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
