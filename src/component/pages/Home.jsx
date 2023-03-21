import Banner from "component/_partials/Banner/Banner";
import Header from "component/_partials/Header/Header";
import Content from "component/_partials/MainContent/Content";
import MainHead from "component/_partials/MainHead";
import Sidebar from "component/_partials/Sidebar/Sidebar";
import React from "react";

const bannerText = {
  heading: "The Christian Co-operative Credit Union Ltd.,Dhaka",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Home() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <Content />
    </>
  );
}

export default Home;
