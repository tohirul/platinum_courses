import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  FaAward,
  FaBusinessTime,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import homeBG1 from "../../Images/homeBg.jpg";
import homeBG2 from "../../Images/homeBg2.jpg";
import couponImage from "./meta-img/coupon.png";
// import MetaDecorator from "./MetaDecorator";
import Share from "./Share";
// import { Helmet } from "react-helmet-async";
import MetaDecorator from "./MetaDecorator";
const Home = () => {
  // Use useLocation to get the current location
  const location = useLocation();

  // Extract the search (query) parameters from the location
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.get("coupon")) {
    // Get the value of the "coupon" parameter
    const couponCode = searchParams.get("coupon");
    localStorage.setItem("couponCode", couponCode);
    console.log("couponCode:", couponCode);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const homeBg1 = {
    backgroundImage: `url(${homeBG1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const homeBg2 = {
    backgroundImage: `url(${homeBG2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  // const baseUrl =
  //   "https://654f7e53154d803276c5e0a5--enchanting-fenglisu-8eb9f5.netlify.app/";
  const coupon = "erohuawhprguahirguir";
  const completeUrl = `https://enchanting-fenglisu-8eb9f5.netlify.app/?coupon=${encodeURIComponent(
    coupon
  )}`;
  // console.log(completeUrl);
  const shareUrl = completeUrl;
  const quote = "This is a test share for Facebook";
  const absoluteImageUrl =
    `https://enchanting-fenglisu-8eb9f5.netlify.app/static/media/coupon.f58da3c43ed533064608.png` ||
    `${window.location.origin}${couponImage}`;
  return (
    <div className="container mt-5 mb-5 p-3 pt-0">
      <div
        className="shadow mb-5 p-5 border rounded text-center"
        style={homeBg1}
      >
        <h5 className="text-warning fw-semibold">START LEARNING FROM HOME</h5>
        <h4>Connect With Our Expert And Start Learning Today</h4>
        <p>
          We are providing high-quality online courses to improve your skill.
          Our all instructors are highly experienced and experts.
        </p>
        <Button variant="outline-warning">
          <Link
            to="/courses"
            className="text-dark fw-bold text-decoration-none mt-2"
          >
            Our Courses
          </Link>
        </Button>
      </div>
      <HomeCarousel></HomeCarousel>
      <div
        className="shadow mt-5 mb-3 p-5 border rounded text-center "
        style={homeBg2}
      >
        <h5 className="text-warning text-center fw-semibold">Why Choose Us?</h5>
        <div className=" d-flex warp gap-3 mt-3 mb-3 fw-semibold ">
          <FaAward></FaAward>High Quality Courses
        </div>
        <div className=" d-flex warp gap-3 mt-3 mb-3 fw-semibold ">
          <FaUserGraduate></FaUserGraduate>Expert Instructors
        </div>
        <div className=" d-flex warp gap-3 mt-3 mb-3 fw-semibold ">
          <FaBusinessTime></FaBusinessTime>Life Time Access
        </div>
        <div className=" d-flex warp gap-3 mt-3 mb-3 fw-semibold ">
          <FaPhoneAlt></FaPhoneAlt> Dedicated Support
        </div>
        <div className="text-center">
          <Button variant="warning">
            <Link
              to="/courses"
              className=" text-white fw-bold text-decoration-none mt-2"
            >
              Enroll Now
            </Link>
          </Button>
        </div>
      </div>
      <MetaDecorator absoluteImageUrl={absoluteImageUrl} shareUrl={shareUrl} />

      <Button variant="primary" onClick={handleShow}>
        Share
      </Button>
      <Share show={show} fn={handleClose} shareUrl={shareUrl} quote={quote} />
    </div>
  );
};

export default Home;
