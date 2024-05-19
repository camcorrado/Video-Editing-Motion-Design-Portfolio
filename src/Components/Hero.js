import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <div className="circle">
            <img
              alt="Cam Corrado Headshot"
              className="mainHeadShot"
              src="https://i.imgur.com/HKH6Shx.png"
            />
          </div>
        </section>
        <section className="bio">
          <p>
            With a passion for creativity & a penchant for adventure, I blend
            technical finesse with imaginative flair to sculpt visually
            captivating stories & bring charm to every endeavor.
          </p>
          <p>
            SUNY Purchase's Film & Media Studies program built the foundation
            for my career, establishing my core skills & emboldening my eye for
            the whimsical, weird, & well-crafted. More recently, I ventured into
            Full-Stack Web Development with Thinkful, expanding my skill set to
            encompass the intricate world of coding. With a tool set that spans
            from Adobe After Effects & Premiere to HTML, CSS, & JavaScript, I
            thrive in various realms of digital storytelling.
          </p>
          <p>
            Beyond the pixels, you will find me indulging in a medley of
            hobbies, from gardening with my cat to listening to audiobooks.
            There is also plenty of gaming as well as horror movie marathons -
            on VHS!
          </p>
          <p className="lastP">
            Thanks for stopping by! I hope you have enjoyed my reels. I look
            forward to our future together.
          </p>
        </section>
      </section>
    );
  }
}
