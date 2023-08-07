import React from "react";
import Slider from "react-slick";

export const OurTeam = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-color pb-5">
      <div className="container pb-5">
        <div className="row ">
          <div className="text-center mt-5 ">
            <div className="recent-text p_text lh-sm">
              Meet The Awesome and Creative members of Our Team{" "}
            </div>
          </div>
          <div>
            <Slider {...settings}>
              <div className=" text-center mt-5">
                <img src="images/Rectangle 29.png" className="img-fuild " />
                <div className="team_heading"> Brendon M</div>
                <div className="team_p "> CEO & Founder</div>
              </div>
              <div className=" text-center mt-5">
                <img src="images/Rectangle 30.png" className="img-fuild " />
                <div className="team_heading"> Jodi J. Appleby</div>
                <div className="team_p "> Full Stack Developer</div>
              </div>
              <div className=" text-center mt-5">
                <img src="images/Rectangle 31.png" className="img-fuild " />
                <div className="team_heading"> Justin S. Meza</div>
                <div className="team_p "> Graphic Designer</div>
              </div>
              <div className=" text-center mt-5">
                <img src="images/Rectangle 32.png" className="img-fuild " />
                <div className="team_heading"> Susan T. Smith</div>
                <div className="team_p "> UI/UX Designer</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
