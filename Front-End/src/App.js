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

  fetchPeople = () => {
    fetch('http://localhost:3000/people')
    .then(res => res.json())
    .then(peopleObject => {
      this.setState({
        people: peopleObject
      })
    })
  }

  componentDidMount(){
   this.fetchPeople()
  }

  handleClick = (person) => {
    // console.log('Clicked', person)
    this.setState({
      person: person
    })
  }

  handleDelete = (id) => {
    console.log("Delete button clicked", id)
    fetch(`http://localhost:3000/people/${id}`,{
      method: 'DELETE'
    })
    .then(res => {
      const newPeople = this.state.people.filter( person => person.id !== id)
      this.setState({
        people: newPeople,
        person: {}
      })
    })
  }

  render() {
    
    // console.log(this.state.people)
    return <Fragment>
      <TopBar person={this.state.person}/>
      <SideBar people={this.state.people} handleClick={this.handleClick}/>
      <ShowPanel person={this.state.person} handleDelete={this.handleDelete} />
    </Fragment>;
  }
}
