import React, { useEffect, useState } from "react";
const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlePageLoadAnimation = () => {
      setVisible(true);
    };

    handlePageLoadAnimation();

    const handleScroll = () => {
      const element = document.getElementById("whyChooseUs");
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
    <div className="container mt-5 mb-5" id="services">
      <div className="row">
        <div className="col-12 text-center mt-3">
          <h2>What We Do For Your Business</h2>
          <div className="w-md-50 mx-md-auto ">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
          id="whyChooseUs"
        >
          <img
            src="images/Web dev.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>Website Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
        >
          <img
            src="images/Mobile dev.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>Mobile App Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
        >
          <img
            src="images/Digital marketing.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
        >
          <img
            src="images/custom.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>White Label</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
        >
          <img
            src="images/web design.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>Website Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
        <div
          className={`col-12 col-md-4 text-center mt-3 ${
            visible ? "fade-in-down" : ""
          }`}
        >
          <img
            src="images/ui ux.svg"
            className=" mb-3"
            width="50"
            height="50"
          />
          <h3>UI / UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue amet
            aenean sed enim odio.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
