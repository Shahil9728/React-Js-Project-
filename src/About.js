import React from 'react'
import Common from './Common'
import web from '../src/images/About.svg'

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now" />
    </>
  )
}

export default About