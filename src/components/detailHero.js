import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const DetailHero = ({ img, mobileImg, vid, bgColor }) => {
  return (
    <div className="detail-hero">
      <StaticImage src="../images/m1_laptop.png" alt="alt text" loading="eager"  />
      {img && (
        <GatsbyImage
          image={img}
          alt="alt text"
          className="detail-hero__desktop"
        />
      )}
      {vid && (
        <video className="detail-hero__desktop" autoPlay loop playsInline muted >
          <source src={vid} />
        </video>
      )}
      <div className={`mobile-wrap ${bgColor}`}>
        <GatsbyImage
          image={mobileImg}
          alt="alt text"
          className="mobile-wrap__img"
        />
        <StaticImage
          loading="eager"
          src="../images/iPhone_2x.png"
          alt="alt text"
          className="mobile-wrap__phone"
        />
      </div>
    </div>
  )
}

export default DetailHero