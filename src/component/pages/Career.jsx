import MainHead from 'component/_partials/MainHead'
import React from 'react'
const bannerText = {
  heading: "Our Services",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Career() {
  return (
    <MainHead bannerText={bannerText}/>
  )
}

export default Career