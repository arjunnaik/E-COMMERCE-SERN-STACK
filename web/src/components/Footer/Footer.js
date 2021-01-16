import React from "react";
import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text container">
        <div className="footer__about">
          <h5>
            <strong>About</strong>
          </h5>
          <p>
            Full E-commerce Website Build Using ReactJs, MySql, NodeJs and
            Express.
          </p>
        </div>

        <div className="Created By">
          <h5>
            <strong>Created By</strong>
          </h5>
          <ul>
            <li>Ayush Naik</li>
            <li>Arjun Naik</li>
            <li>Basavaraj Muttagi</li>
            <li>Druva Alur</li>
          </ul>
        </div>
      </div>
      <hr className="container"></hr>
      <div className="container footer__bottom">
        <p>Copyright © 2021 All Rights Reserved</p>
        <div>
          <ul className="footer__social">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
