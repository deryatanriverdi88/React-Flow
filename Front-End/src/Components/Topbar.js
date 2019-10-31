import React, { Component } from "react";

export default class Topbar extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="top-bar">
        <h1 className="top-bar-title">{this.props.person.name}</h1>
        <h2>Add someone that inspires you!</h2>
        <form onChange={(event) => this.props.handleChange(event)} >
          <input name="name" type="text" placeholder="Name"  value={this.props.name}/>
          <input name="bio" type="text" placeholder="Bio" value={this.props.bio} />
          <input name="img" type="text" placeholder="Img Url" value={this.props.img}/>
          {!this.props.person.id ? <input type="submit" onClick={(e) => this.props.handleSubmit(e)} /> : <input type="submit" value="Edit"/>}
        </form>
      </div>
    );
  }
}
