import React from 'react';
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isMobile, setisMobile] = useState(false)
    const toggleHam = () => {
        setisMobile(!isMobile)
    }

    return (
        <>

            <div className='navbar'>

                <div className='navbar-image'>
                    <span>Maheep Gupta</span> {isMobile ? <i class="fa-solid fa-xmark fa-xl ham" onClick={toggleHam}></i> : <i className="fa fa-bars fa-xl ham" aria-hidden="true" onClick={toggleHam}></i>}</div>
                <div className='navbar-content desktop'>
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/services"><span>Services</span></Link>
                    <Link to="/projects"><span>Projects</span></Link>
                    <Link to="https://blogs-maheep-gupta.hashnode.dev/"> <span>Blog</span></Link>
                    <Link to="/contact"> <span>Contact</span></Link>


                </div>

                {isMobile ? <div className='navbar-content mobile' >
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/services"><span>Services</span></Link>
                    <Link to="/projects"><span>Projects</span></Link>
                    <Link to="https://blogs-maheep-gupta.hashnode.dev/"> <span>Blog</span></Link>
                    <Link to="/contact"> <span>Contact</span></Link>
                    {/* <span
                        className='main-theme' onClick={swtichDark}>
                        <span >Theme</span>
                        <span className='themeDisplay' style={{ width: '30px', height: '30px', display: 'inline-block', borderRadius: "100%", backgroundColor: `${themeToggle ? '#000' : '#fff'}` }}>

                        </span>
                    </span> */}
                </div> : null}
                <div className='contactButton' onClick={() => { window.location.href = 'https://www.linkedin.com/in/maheep-gupta-281867222/' }}><span>Let's Talk</span></div>
            </div>


        </>
    )
}

export default Navbar