import MainHead from 'component/_partials/MainHead';
import React from 'react'
const bannerText = {
  heading: "Contact",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Contact() {
  return (
    <>
    <MainHead bannerText={bannerText}/>
    </>
  )
}

export default Contact