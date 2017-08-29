import React, { Component } from 'react';

  class Information extends React.Component{
  	render(){
  	return(

		//MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}
  		<p>You need to contact {this.props.firstName} {this.props.lastName} at {this.props.phoneNumber} <button onClick={this.props.pending}>call</button> <span id="pending" style={{backgroundColor: this.props.color}}>Pending</span></p>
  	)
  }
}
export default Information;