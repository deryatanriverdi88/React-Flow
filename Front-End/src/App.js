import React, { Component, Fragment } from "react";
import "./Stylesheets/style.scss";
import ShowPanel from './Components/ShowPanel'
import SideBar from './Components/Sidebar'
import TopBar from './Components/Topbar'


export default class App extends Component {

  state ={
    people: [],
    person: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/people')
    .then(res => res.json())
    .then(peopleObject => {
      this.setState({
        people: peopleObject
      })
    })
  }

  handleClick = (person) => {
    // console.log('Clicked', person)
    this.setState({
      person: person
    })
  }

  render() {
    
    // console.log(this.state.people)
    return <Fragment>
      <TopBar />
      <SideBar people={this.state.people} handleClick={this.handleClick}/>
      <ShowPanel person={this.state.person} />
    </Fragment>;
  }
}
