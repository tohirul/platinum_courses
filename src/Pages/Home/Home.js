import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  FaAward,
  FaBusinessTime,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import homeBG1 from "../../Images/homeBg.jpg";
import homeBG2 from "../../Images/homeBg2.jpg";
import couponImage from "./meta-img/coupon.png";
// import MetaDecorator from "./MetaDecorator";
import Share from "./Share";
import { Helmet } from "react-helmet-async";
import MetaDecorator from "./MetaDecorator";
const Home = () => {
  const { id } = useParams();
  if (id) {
    console.log("ID from params", id);
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
  const shareUrl =
    "https://654f7e53154d803276c5e0a5--enchanting-fenglisu-8eb9f5.netlify.app/";
  const quote = "This is a test share for Facebook";
  const absoluteImageUrl =
    `https://654f7e53154d803276c5e0a5--enchanting-fenglisu-8eb9f5.netlify.app/static/media/coupon.f58da3c43ed533064608.png` ||
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
      {/* <Helmet>
        <meta
          property="og:title"
          content="Discount Coupon"
          data-react-helmet={true}
        />
        <meta
          property="og:description"
          content="Discount coupon code"
          data-react-helmet={true}
        />
        <meta property="og:type" content="website" data-react-helmet={true} />
        <meta property="og:url" content={shareUrl} data-react-helmet={true} />
        <meta
          property="fb:app_id"
          content="1255815975094440"
          data-react-helmet={true}
        />
        <meta
          property="og:image"
          content={absoluteImageUrl}
          data-react-helmet={true}
        />
        <meta
          property="og:image:type"
          content="image/png"
          data-react-helmet={true}
        />
        <meta
          property="og:image:width"
          content="1200"
          data-react-helmet={true}
        />
        <meta
          property="og:image:height"
          content="630"
          data-react-helmet={true}
        />
      </Helmet> */}
      <Button variant="primary" onClick={handleShow}>
        Share
      </Button>
      <Share show={show} fn={handleClose} shareUrl={shareUrl} quote={quote} />
    </div>
  );
};

export default Home;
