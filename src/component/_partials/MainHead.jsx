import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Banner from "./Banner/Banner";
import Content from "./MainContent/Content";
function MainHead({ bannerText }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Banner bannerText={bannerText} />
    </div>
  );
}

export default MainHead;
