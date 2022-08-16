import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <React.Fragment>
            <div class="footer-top">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <div class="footer-middle">
                <ul class="footer-links">
                    <li class="heading"> About us</li>
                    <li class="sub-heading">Our Heritage</li>
                    <li class="sub-heading">Our Company</li>
                </ul>
                <ul class="footer-links">
                    <li class="heading"> Customer Services</li>
                    <li class="sub-heading">Frequently Asked</li>
                </ul>
                <ul class="footer-links">
                    <li class="heading">Quick Links</li>
                    <li class="sub-heading">Store Locator</li>
                </ul>
            </div>
            <div id="footer-bottom">
                <a class="footer-links2" href="#">Web Accessibility |</a>
                <a class="footer-links2" href="#">Privacy Statement |</a>
                <a class="footer-links2" href="#">Terms of Use |</a>
                <a class="footer-links2" href="#">Site Map |</a>
                <a class="footer-links2" href="#">Contact Us |</a>
                <a class="footer-links2" href="#">Cookie Preferences</a>
                
                <div id="footer-bottom2">
                    <p>&copy; 2019 Starbucks Coffee Company. All rights reserved</p>
                </div>
            </div>

            
        </React.Fragment>
    )
}

export default Footer;