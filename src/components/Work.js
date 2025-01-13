import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Seamless Rent and Bill Management",
      text: "Streamlined systems for rent payments and settling utility bills like water and electricity, reducing hassle for both tenants and owners.",
    },
    {
      image: ChooseMeals,
      title: "Verified Listings with Transparent Details",
      text: "Access thoroughly verified hostels and PGs with detailed descriptions, photos, and ratings, ensuring trust and transparency.",
    },
    {
      image: DeliveryMeals,
      title: "Effortless Search and Booking",
      text: "Advanced search filters and a user-friendly interface make finding and booking the ideal accommodation quick and easy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Our platform simplifies the process of finding and managing PG accommodations for students and owners. Students can browse verified hostels and PGs, compare options based on location, budget, and amenities, and book their stay securely. Additionally, we provide a seamless rent payment system and help settle water, electricity, and other utility bills, minimizing the workload for both students and PG owners. With our streamlined solutions, managing student accommodations has never been easier.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;