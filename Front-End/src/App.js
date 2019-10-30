import React, { Component, Fragment } from "react";
import "./Stylesheets/style.scss";
import ShowPanel from './Components/ShowPanel'
import SideBar from './Components/Sidebar'
import TopBar from './Components/Topbar'


export default class App extends Component {

  state ={
    people: [],
    person: {},
    name: '',
    bio: '',
    img: ''
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
    // console.log("Delete button clicked", id)
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

  handleChange =(event)=>{
    // console.log('handle change', event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submit')
    fetch('http://localhost:3000/people', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      }, 
      body: JSON.stringify({
        name: this.state.name, 
        bio: this.state.bio,
        img_url: this.state.img
      })
    })
    .then(res => res.json())
    .then(personObject => {
      this.setState({
        people: [personObject, ...this.state.people],
        person: personObject
      })
    })
    .then(
      this.setState({
        name: '',
        bio: '',
        img: ''
      })
    )
  }

  render() {
    
    console.log(this.state.name)
    // console.log(this.state.people)
    return <Fragment>
      <TopBar
       name={this.state.name}
       bio={this.state.bio}
       img={this.state.img}
       person={this.state.person} 
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}/>
      <SideBar people={this.state.people} 
      handleClick={this.handleClick}/>
      <ShowPanel person={this.state.person} 
      handleDelete={this.handleDelete} />
    </Fragment>;
  }
}
