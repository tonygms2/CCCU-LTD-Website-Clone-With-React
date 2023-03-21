import MainHead from 'component/_partials/MainHead'
import React from 'react'
const bannerText = {
  heading: "FAQ",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function FAQ() {
  return (
    <>
      <MainHead bannerText={bannerText}/>
    </>
  )
}

export default FAQ