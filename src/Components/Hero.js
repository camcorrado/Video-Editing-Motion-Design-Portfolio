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
            With over a decade of professional experience in creative directing
            and video editing, I craft visually captivating stories and bring
            charm to every endeavor.
          </p>
          <p>
            Spanning corporate and independent realms, I possess a diverse
            background specializing in children's educational content, music
            videos, animated logos/titles, and asset packages. From my tenure at{" "}
            <span>Music with Miss Merry</span>, where I directed and edited
            numerous music videos from concept to completion, to my role at{" "}
            <span>TIM Global</span>, where I produced weekly content and assets
            for six streaming sites, I've cultivated a passion for storytelling
            and optimized workflows, bringing clients' stories to life through
            high-quality content tailored to diverse audiences and platforms.
          </p>
          <p>
            <span>SUNY Purchase's Film & Media Studies</span> program built the
            foundation for my career, establishing my core skills and
            emboldening my eye for the whimsical, weird, and well-crafted. More
            recently, I ventured into{" "}
            <span>Full-Stack Web Development with Thinkful</span>, expanding my
            skill set to encompass the intricate world of coding, which enabled
            me to build this portfolio from the ground up! With a tool set that
            spans from <span>Adobe After Effects and Premiere</span> to{" "}
            <span>HTML, CSS, and JavaScript</span>, I thrive in various realms
            of digital storytelling.
          </p>
          <p>
            Additionally, you may often find me in my garden-side hammock with
            my cat, playing board or video games, and watching horror movies -
            on VHS!
          </p>
          <p className="lastP">
            Thank you for visiting! I hope you've enjoyed my content and I look
            forward to the possibility of working together in the future.
          </p>
        </section>
      </section>
    );
  }
}
