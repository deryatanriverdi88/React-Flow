import React, { Component } from "react";

export default class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <h1 className="top-bar-title">{this.props.name}</h1>
        <h2>Add someone that inspires you!</h2>
        <form>
          <input name="name" type="text" placeholder="Name" />
          <input name="bio" type="text" placeholder="Bio" />
          <input name="img_url" type="text" placeholder="Img Url" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
