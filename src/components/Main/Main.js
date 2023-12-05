import React from 'react'
import Navbar from '../Navbar/Navbar'
import './main.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'



function Main() {

    const services = ["Website Making", "UI/UX Development", "API Developemnt", "Web Design"]
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

            <section id='intro-section'>

                <div className='mainpage'>
                    <div className='mainPage-content'>
                        <div className='profileImg'>
                            <img src={require('./profile-pic.png')} alt='Maheep Gupta' />
                        </div>
                        <div className='intro'>
                            <span className='intro-title'>Hello, I am Maheep, </span>
                            <span>An Emerging Full Stack Developer based in India</span>
                        </div>
                        <div className='sub-heading'>
                            "Crafting digital experiences from front-end elegance to back-end functionality. Empowering your online presence with a full stack developer's expertise."
                        </div>
                        <div className='left-slign-mobile'>

                            <div className='btn-grp'>
                                <button className='contact .
                                grdaient-bg-btn'><Link to="/contact">get in touch
                                    </Link></button>
                                <button className='contact no-bg'><Link to="/projects">view All Works
                                </Link> </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id='services-section'>
                <div className='quote-grp'><p className='qoutation'>
                    Dev that solves
                </p>

                    <p className='qoutation line-2'>
                        <hr />
                        <span>problems, one</span>
                    </p>
                    <div className='lstline-design'>
                        <p className='qoutation lst-line'>
                            product at a time
                        </p>
                        <div className='btn-grp lst-line-btn '>
                            <button className='contact grdaient-bg-btn'><Link to="/contact">get in touch
                            </Link></button>
                            <button className='contact no-bg'><Link to="/projects">view All Works
                            </Link> </button>
                        </div>
                    </div>

                </div>
                <div className='service-list'>
                    {services.map((element, index) => {
                        return (
                            <>
                                <hr />
                                <div key={index} className='services'>
                                    <Link to="/services"><span>
                                        {element}
                                    </span>
                                        <i className="fa-solid fa-arrow-up-right-from-square arrow"></i>
                                    </Link>

                                </div>
                            </>

                        )
                    })}
                    <hr />

                </div>
            </section>
            <section id='projects-section'>

                <div className='title-grp'>
                    <div className='intro project-title'>
                        <span>Looks at my </span>
                        <span className='intro-title '>
                            Projects
                        </span>

                    </div>
                    <div className='sub-heading intro-project'>
                        "Explore a showcase of my diverse projects, where front-end creativity meets back-end functionality. Discover innovative solutions and dynamic applications brought to life through my full stack development expertise."
                    </div>
                </div>
                <div className='project-list'>
                    {projectJson.map((ele, index) => {
                        return (
                            <Link to={ele.url}>
                                <div className='project'>
                                    <div className='project-img'>
                                        <img src={require(`./p${index}.png`)} alt='weather me' />
                                    </div>
                                    <div className='proj-desc'>
                                        <p className='in-project-title project-title'>{ele.name}</p>
                                        <p> {ele.desc}</p>
                                    </div>
                                </div></Link>
                        )
                    })}
                </div>

            </section>
            <section id='workIntresed'>
                <div className='intrested-work gradient-bg'>
                    <p className='first-head'>Interested in</p>
                    <p className='second-head'>working with me?</p>
                    <div className='btn-grp pad-ins-btn'>
                        <button className='ins-btn'><Link to="/contact">get in touch
                        </Link></button>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                <Footer />

            </footer>


        </>

    )
}

export default Main;