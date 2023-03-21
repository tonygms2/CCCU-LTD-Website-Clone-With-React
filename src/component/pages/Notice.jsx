import Content from 'component/_partials/MainContent/Content'
import MainHead from 'component/_partials/MainHead'
import React from 'react'

const bannerText = {
  heading: "Notice",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Notice() {
  return (
    <>
      <MainHead bannerText={bannerText}/>
    </>
  )
}

export default Notice