import React from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import HeroSection2 from "../component/HeroSection2";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function Home() {
  return (
    <>
      <WebHeader />
      <div className="pageWrapper">
        <HeroSection2 />
        <WebFooter />
      </div>
    </>
  );
}
