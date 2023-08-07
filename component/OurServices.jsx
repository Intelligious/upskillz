import { Rating } from "@mui/material";
import React, { useState } from "react";

const OurServices = () => {
  return (
    <div className="bg-color ">
      <div className="container mt-4 pb-4">
        <div className="row text-center text-md-start ">
          <div className="col-12 col-md-6 mt-5 text-center text-md-start">
            <h2>
              Trusted By Over <span>400</span> + <span>Client</span> Worldwide
              Since <span>2010</span>
            </h2>
          </div>
          <div className="col-12 col-md-6 mt-5 text-center text-md-start text-padding ">
            <div className="d-md-flex">
              <div className="me-md-5">
                <h2>4.6</h2>
                <Rating name="size-medium" defaultValue={5} size="small" />
                <p>400 Ratings</p>
              </div>
              <div className="mx-md-4">
                <h2>6k+</h2>
                <p>
                  Worldwide Product <br /> Sale per year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
