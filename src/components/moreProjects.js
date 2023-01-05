import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
// import { Pagination } from 'swiper'
import { Keyboard } from "swiper"

import "swiper/css/bundle"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const MoreProjects = ({ caseStudies }) => {
  return (
    <section className="more-projects">
      <h2 className="section-header section-header--more">
        <span className="section-header__text">More Projects</span>
      </h2>
      <Swiper
        speed={800}
        className={"more-work-swiper"}
        modules={[Navigation, Keyboard]}
        slidesPerView={1.5}
        keyboard
        navigation={{ clickable: true }}
        slideToClickedSlide={false}
        spaceBetween={20}
        breakpoints={{
          744: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {caseStudies.map((study, i) => {
          return (
            <SwiperSlide key={i}>
              <Link
                className="project-slide"
                aria-label={`${study.node.title} project slide`}
                to={`/projects/${study.node.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("’", "")
                  .replaceAll(".", "")}`}
              >
                <GatsbyImage
                  formats={["auto"]}
                  image={study.node.coverImg.childImageSharp.gatsbyImageData}
                  alt={study.node.title}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default MoreProjects
