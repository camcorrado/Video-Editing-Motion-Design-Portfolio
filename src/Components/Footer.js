import React, { Component } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="footerButtons">
          <ul className="navLinks">
            <li className="gmail">
              <a href="mailto:camcorrado@gmail.com" aria-label="send email">
                <FontAwesomeIcon icon={faEnvelope} className="faIcon" />
              </a>
            </li>
            <li>
              {this.state}
              <a
                href="https://www.linkedin.com/in/camcorrado/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="faIcon" />
              </a>
            </li>
            <li className="vimeo">
              <a
                href="https://vimeo.com/camcorrado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github profile"
              >
                <FontAwesomeIcon icon={faVimeo} className="faIcon" />
              </a>
            </li>
            <li className="github">
              <a
                href="https://github.com/camcorrado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github profile"
              >
                <FontAwesomeIcon icon={faGithub} className="faIcon" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
