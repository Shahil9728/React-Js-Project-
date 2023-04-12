import React from 'react'
import web from '../src/images/home.svg'
import { NavLink } from 'react-router-dom'
import './App.css'
import Common from './Common'

const Home = () => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Grow your Businness with <strong className='brand-name'>SahuWare</strong></h1>
                  <p className='my-3'>
                    We're the squad of skilled web wizards here to make your online dreams come true, and we do it with a sexy swagger that'll leave your website smokin' hot.
                  </p>
                  <div className='mt-5'>
                    <NavLink to="/services" className='btn-get-started'>Get Started</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img animated'>
                  <img src={web} className='img-fluid' alt='home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home