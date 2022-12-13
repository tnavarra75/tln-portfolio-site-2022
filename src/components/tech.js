import * as React from 'react'
import { techList } from '../content/tech'
import TechItem from '../components/techItem'
import { motion } from 'framer-motion'


const Tech = () => {

  return (
    <motion.section 
      id="skills" 
      className='tech container'
      initial="hidden"
      whileInView="visible"
      transition={{duration: 3}}
      variants={{
        visible: {opacity: 1},
        hidden: {opacity: 0}
      }}
      >
      <h2 className='section-header'><span className='section-header__text'>skills</span></h2>
      <div className='tech__wrap'>
        <ul className='tech__list'>
          {techList.map((category, i) => (
            <li key={i} className='tech__category'>
              <p className='tech__category-name'>{category.category}</p>
              <ul>
                {category.items.map(item => (
                  <TechItem
                    key={item.name}
                    item={item}
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default Tech