import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <section className="nameAndTitle">
          <div className="name">
            <h1 className="firstName">Cameron</h1>
            <h1>Corrado</h1>
          </div>
          <div className="title">
            <h2 className="firstTitle">Video Editor &</h2>
            <h2>Motion Designer</h2>
          </div>
        </section>
      </nav>
    );
  }
}
