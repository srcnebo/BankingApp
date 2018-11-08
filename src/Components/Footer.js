import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content container">
        <div className="fsection">
          <h4>About us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum nulla accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            deleniti odit consequatur?
          </p>
        </div>
        <div className="fsection">
          <h4>Latest news</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis harum nulla accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            deleniti odit consequatur?
          </p>
        </div>
        <div className="fsection">
          <h4>Latest posts</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="squares">
          <h4>Flickr</h4>
          <div className="square">
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
          </div>
        </div>
      </div>

      <div className="footer-bot">
        <div className="footer-copy container">
          <div className="copy">
            <p>Copyrights&copy; 2017 Inc. All rights reserved</p>
          </div>

          <div className="social">
            <i className="fab fa-facebook-square">
              <span>Facebook</span>
            </i>
            <i className="fab fa-github-square">
              <span>Github</span>
            </i>
            <i className="fab fa-twitter-square">
              <span>Twitter</span>
            </i>
            <i className="fab fa-linkedin">
              <span>Linkedin</span>
            </i>
            <i className="fab fa-pinterest-square">
              <span>Pinterest</span>
            </i>
            <i className="fab fa-instagram">
              <span>Instagram</span>
            </i>
          </div>
        </div>
        <div className="totop">
          <a href="www.google.com">
            <i className="fas fa-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
