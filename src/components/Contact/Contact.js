import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './contact.css'

function Contact() {
  return (
    <>
      <section id='conatct-section'>
      <Navbar />
        <div className='main-box'>
          <div className='form-intro-part'>
            <div className='get-in-touch'>
              <span>Get in touch</span>
            </div>
            < div className='sum'>
              <span>Connect with me through my contact page. Whether you have a project in mind, a question to ask, or just want to say hello, I'd love to hear from you. Fill out the form or use the provided contact details. Let's start a conversation and bring ideas to life.</span>
            </div>
          </div>
          <div className='form-div'>
            <form action="mailto:maheepgupta321+portfolioWebsite@gmail.com"
              method="POST"
              enctype="multipart/form-data"
              name="EmailForm">
              <label htmlFor='name'>
                Your Name
                <input  required type='text' name='Name' id='name' placeholder='Enter your name' />
              </label>
              <label htmlFor='email'>
                Your Email
                <input required   type='email' name='Gmail' id='email' placeholder='Enter your Email' />
              </label>
              <label htmlFor='amount'>
                Your Budget
                <input type='number' name='Gmail' id='amount' placeholder='1K-3K' />
              </label>
              <label htmlFor='message'>
                Message
                <textarea required cols={50} rows={10} type='number' name='Gmail' id='message' placeholder='Message' />
              </label>
              <input type='submit' onSubmit={e=>e.target.reset()} className='submit-btn'/>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact