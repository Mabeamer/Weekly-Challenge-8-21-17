import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Information from './Information.js';
var contactList = [
					{firstName:"jjj", lastName:"ddd", phoneNumber:111},
					{firstName:"kkk", lastName:"ccc", phoneNumber:222},
					{firstName:"lll", lastName:"sss", phoneNumber:333}	
					];

class App extends Component {
// HARD: Using an array of contacts, loop through each one and create a new Contact component for each
  render() {
    return (
      <div className="App">
      	<Header name="Markus" />
      	<Information firstName="Alex" lastName="Beamer" phoneNumber="8888888"/>
      	{contactList.map((contact) => <Information firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber} />)}
      </div>
    );
  }
}

export default App;
