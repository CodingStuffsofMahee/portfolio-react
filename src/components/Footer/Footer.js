import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <hr />
            <div className='footer-content'>
                <div className='footer-nav first-nav'>
                    <div className='footer-image'>Maheep Gupta</div>
                    <div className='copyright'>All right reserved by Maheep Gupta</div>

                </div>
                <div className='footer-nav second-nav'>
                    <div className='footer-content-nav'>
                        <span>Home</span>
                        <span>About</span>
                        <span>Contact</span>
                    </div>
                    <div className='socials'>
                        <Link to="https://www.instagram.com/maheep__gupta/">
                            <div className='insta  circle'>

                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </Link>
                        <Link to="https://twitter.com/Maheep_Gupta_?t=eEyUfGoYjwz_VCkrQcQ3xA&s=09">

                            <div className='x circle'>

                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </Link>
                        <Link to="https://github.com/CodingStuffsofMahee">

                            <div className='github circle'>

                                <i class="fa-brands fa-github"></i>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Footer