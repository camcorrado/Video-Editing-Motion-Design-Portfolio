import React, { Component } from "react";
import headshot from "../images/HEADSHOT 2024 CIRCLE.png";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <div className="circle">
            <img
              alt="Cam Corrado Headshot"
              className="mainHeadShot"
              src={headshot}
            />
          </div>
        </section>
        <section className="bio">
          <p>
            With over a decade of professional experience in Video Editing and
            Motion Design, I craft visually captivating stories and bring charm
            to every endeavor.
          </p>
          <p>
            Spanning corporate and creative realms, I bring a diverse background
            specializing in animated logos and titles, asset packages, music
            videos, and educational content. From my tenure at Music with Miss
            Merry, where I utilized proven techniques to deliver educational
            entertainment to younger audiences, to my role at TIM Global, where
            I conceptualized, produced, and marketed short and long form
            content, products, services, and technologies across six streaming
            sites, I've cultivated a keen eye for detail and a passion for
            storytelling. Consistently, I deliver high-quality content tailored
            to diverse audiences and platforms.
          </p>
          <p>
            SUNY Purchase's Film & Media Studies program built the foundation
            for my career, establishing my core skills and emboldening my eye
            for the whimsical, weird, and well-crafted. More recently, I
            ventured into Full-Stack Web Development with Thinkful, expanding my
            skill set to encompass the intricate world of coding. With a tool
            set that spans from <span>Adobe After Effects and Premiere</span> to{" "}
            <span>HTML, CSS, and JavaScript</span>, I thrive in various realms
            of digital storytelling.
          </p>
          <p>
            Additionally, you may often find me relaxing in the garden with my
            cat, playing board or video games, and watching horror movies - on
            VHS!
          </p>
          <p className="lastP">
            Thanks for stopping by! I hope you have enjoyed my content. I look
            forward to a future together.
          </p>
        </section>
      </section>
    );
  }
}
