import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './services.css'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      service: "Website Making",
      serviceDesc: "Elevate your online presence with expert website creation services tailored to your vision. Transform ideas into captivating websites that engage, impress, and drive results. Partner with us for digital success."
    },
    {
      service: "UI/UX Development",
      serviceDesc: "Elevate user experiences with my UI/UX coding expertise. Transform designs into seamless, functional interfaces that captivate users and enhance engagement. Let's bring your visions to life through code."
    },
    {
      service: "API Developemnt",
      serviceDesc: "Unlock seamless digital experiences with my API development, coding, and maintenance services. Elevate your tech solutions with expertise tailored to enhance efficiency, functionality, and user satisfaction."
    },
    {
      service: "Web Design",
      serviceDesc: "Unlock captivating web designs that captivate your audience and elevate your online presence. Transforming visions into pixel-perfect realities – your digital success story starts here."
    }]

  return (
    <>
      <section id='services-list-section'>
        <Navbar />
        <div className='Services-list'>
          <div className='title'><span>Our</span><span className='title colored'> Services</span>
          </div>
          {services.map((ele, ind) => {
            return (
              <div className={`${ind % 2 === 0 ? 'services-div' : 'reverse-div'}`
              } >
                <div className='text-part'>
                  <div className='title'>
                    <span>{ele.service}</span>
                  </div>
                  <div className='sub-title'>
                    {ele.serviceDesc}
                  </div>
                  <Link to="/contact">
                  <div className='hire-me grdaient-bg-btn'>
                    Hire Me
                  </div></Link>
                </div>
                <div className='serviceImage'>
                  <img src={require(`./s${ind}.jpg`)} alt='serviceImage' />
                </div>

              </div>
            )
          })}

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services