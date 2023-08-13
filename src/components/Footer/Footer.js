import React from 'react'
import './footer.css'

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
                        <div className='insta  circle'>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className='x circle'>
                        <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className='github circle'>
                        <i class="fa-brands fa-github"></i>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Footer