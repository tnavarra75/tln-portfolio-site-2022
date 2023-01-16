import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

const DetailHero = ({ img, mobileImg, vid, altText }) => {
  return (
    <div className="detail-hero">
      <StaticImage src="../images/m1_laptop.png" alt="laptop" placeholder="none"  />
      {img && (
        <GatsbyImage
          image={img}
          alt={altText}
          className="detail-hero__desktop"
        />
      )}
      {vid && (
        <video className="detail-hero__desktop" autoPlay loop playsInline muted title={altText}>
          <source src={vid} />
        </video>
      )}
      <div className="mobile-wrap">
        <GatsbyImage
          image={mobileImg}
          alt={altText}
          className="mobile-wrap__img"
        />
        <StaticImage
          src="../images/iPhone.png"
          placeholder="none"
          alt="mobile phone"
          className="mobile-wrap__phone"
        />
      </div>
    </div>
  )
}

export default DetailHero