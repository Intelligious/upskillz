import React, { Component } from "react";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Avatar, CardHeader, Rating } from "@mui/material";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <ArrowCircleRightIcon
        style={{
          fontSize: "30px",
          color: "#ffaf00",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      {" "}
      <ArrowCircleLeftIcon
        style={{
          fontSize: "30px",
          color: "#ffaf00",
        }}
      />
    </div>
  );
}

const AboutUs = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="container mt-5 mb-5 testimonal">
      <div className="row">
        <div className="col-12">
          <h2>Testimonals</h2>
        </div>
        <Slider {...settings}>
          <div className="p-3">
            <div className="card">
              <card className="card-body">
                <Rating
                  className="mt-2"
                  name="size-medium"
                  defaultValue={5}
                  size="small"
                />
                <div className="card_body">
                  <p className="p-3">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Ben Dunk "
                    subheader="CEO"
                  />
                </div>
              </card>
            </div>
          </div>
          <div className="p-3">
            <div className="card">
              <card className="card-body">
                <Rating
                  className="mt-2"
                  name="size-medium"
                  defaultValue={5}
                  size="small"
                />
                <div className="card_body">
                  <p className="p-3">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Ben Dunk "
                    subheader="CEO"
                  />
                </div>
              </card>
            </div>
          </div>
          <div className="p-3">
            <div className="card">
              <card className="card-body">
                <Rating
                  className="mt-2"
                  name="size-medium"
                  defaultValue={5}
                  size="small"
                />
                <div className="card_body">
                  <p className="p-3">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Ben Dunk "
                    subheader="CEO"
                  />
                </div>
              </card>
            </div>
          </div>
          <div className="p-3">
            <div className="card">
              <card className="card-body">
                <Rating
                  className="mt-2"
                  name="size-medium"
                  defaultValue={5}
                  size="small"
                />
                <div className="card_body">
                  <p className="p-3">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe">R</Avatar>}
                    title="Ben Dunk "
                    subheader="CEO"
                  />
                </div>
              </card>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default AboutUs;
