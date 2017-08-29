import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Information from './Information.js';
var contactList = [
					{firstName:"Malik", lastName:"Robinson", phoneNumber:111},
					{firstName:"kkk", lastName:"ccc", phoneNumber:222},
					{firstName:"lll", lastName:"sss", phoneNumber:333}	
					];
// var colorChange = document.getElementById("pending");
class App extends Component {
	constructor() {
    	super();
    	this.state = {backgroundcolor: "red"};
    	this.pending = this.pending.bind(this);
// HARD: Using an array of contacts, loop through each one and create a new Contact component for each
}

pending(){
	console.log("test")
	this.setState({
	backgroundcolor: "green"
	});
}
  render() {
    return (
      <div className="App">
      	<Header name="Markus" />
      	<Information firstName="Alex" lastName="Beamer" phoneNumber="8888888"/>
      	{contactList.map((contact) => <Information firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber} pending={this.pending} color={this.state.backgroundcolor} />)}
      </div>
    );
  }
}

export default App;
