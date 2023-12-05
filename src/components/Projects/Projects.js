import React from 'react'
import Footer from '../Footer/Footer'
import "./project.css"
import { Link } from 'react-router-dom'

function Projects() {
  const projectJson = [
    {
      name: "Weather App",
      desc: "API based React App",
      url: "https://weather-forecast-maheep-gupta.netlify.app/",
      fulldesc: "Stay informed with a React-powered weather app using Weather Me API, providing real-time and 3-hourly forecasts for your location."
    },
    {
      name: "WhatsApp connect",
      desc: "React App",
      url: "https://whatsapp-quick-connect.netlify.app/",
      fulldesc: "Seamlessly chat on WhatsApp without saving numbers. Our React-based app simplifies connecting, letting you message contacts hassle-free. Privacy meets convenience."
    },
    {
      name: "Text Utlis",
      desc: "React App",
      url: "https://text-utlis-by-maheep-gupta.netlify.app/",
      fulldesc: "React-based Text Utils app: Count, convert case, and switch themes. Effortlessly manage text with character count and uppercase/lowercase options."
    },
    {
      name: "Tic tac Toe",
      desc: "HTMl CSS JS bsed game",
      url: "https://portfolio-maheep-gupta.web.app/ResourcesUsed/AdditionalFiles/Tic-Tac-Toe/main.html",
      fulldesc: "Enjoy classic offline two-player fun with our HTML, CSS, and JS Tic Tac Toe game. Unleash strategic moves anywhere!"
    },
    {
      name: "CSS Generators",
      desc: "React App",
      url: "https://css-gradient-generator-maheep-gupta.netlify.app/",
      fulldesc: "Effortlessly create stunning effects with our CSS generator. Craft gradient backgrounds and stylish box shadows using automatically generated code."
    }
  ]
  return (
    <>
      <section id='projects-section ' className='webpage'>

        <div className='title-grp webpage-tile'>
          <div className='project-head-title'>
            <span>Looks at my </span>
            <span className='intro-title '>
              Projects
            </span>

          </div>
          <div className='sub-heading intro-project'>
            "Explore a showcase of my diverse projects, where front-end creativity meets back-end functionality. Discover innovative solutions and dynamic applications brought to life through my full stack development expertise."
          </div>
        </div>
        <div className='project-list webpage-list'>
          {projectJson.map((ele, index) => {
            return (
              <div className='project'>
                <div className='project-img'>
                  <img src={require(`../Main/p${index}.png`)} alt='weather me' />
                </div>
                <div className='proj-desc'>
                  <p className='in-project-title project-title'>{ele.name}</p>
                  <p> {ele.desc}</p>
                  <Link to={ele.url} target='_blank'>
                    <div className='hire-me grdaient-bg-btn'>
                      View
                    </div>
                  </Link>
                </div>
                <div className='full-desc'>
                  <span>
                    {ele.fulldesc}
                  </span>

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

export default Projects