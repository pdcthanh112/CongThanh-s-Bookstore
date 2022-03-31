import React from "react";
import './footer.scss'

const Footer = () => {
    return (
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">congthanhbook.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Technology</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">Java Script</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Node</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">React</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Flutter</a></li>
                <li><a href="http://scanfcode.com/category/android/">MySQL</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Firebase</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2022 All Rights Reserved by &nbsp;
                <a href="https://www.facebook.com/congthanhh112/">CongThanh</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/congthanhh112/"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="https://twitter.com/"><i className="fa fa-twitter" /></a></li>
                <li><a className="instagram" href="https://www.instagram.com/"><i className="fa fa-instagram" /></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/feed/"><i className="fa fa-linkedin" /></a></li>   
                <li><a className="github" href="https://www.linkedin.com/feed/"><i className="fa fa-github" /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
}

export default Footer;