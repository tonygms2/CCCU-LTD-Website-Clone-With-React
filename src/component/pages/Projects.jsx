import React from "react";
import MainHead from "component/_partials/MainHead";
import ServicesCard from "component/_partials/ServicesCard";
import childCareImg from "assets/images/project/dc_child.jpg";
import dcSchoolImg from "assets/images/project/dcschool.JPG";
import girlsHostelImg from "assets/images/project/hostel.jpg";
import LoginModal from "component/_partials/login/LoginModal";
const bannerText = {
  heading: "Projects",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

const projectText = [
  {
    "serviceType": "DC School",
    "description":"World class standard child care facility is provided to the members...",
  },
  {
    "serviceType": "DC Child Care",
    "description":"World class standard child care facility is provided to the members...",
  },
  {
    "serviceType": "Girl's Hostel",
    "description": "Perfect for working women and students with in dhaka city...",
  },
];
function Projects() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      
      <div className="container mt-32 md:mt-[3.5rem] mx-auto mb-20 gap-6 px-4 grid grid-cols-1 md:grid-cols-3">
        <ServicesCard imgSrc={dcSchoolImg} ServicesInfo={projectText[0]} />
        <ServicesCard imgSrc={childCareImg} ServicesInfo={projectText[1]} />
        <ServicesCard imgSrc={girlsHostelImg} ServicesInfo={projectText[2]} />
      </div>
    </>
  );
}

export default Projects;
