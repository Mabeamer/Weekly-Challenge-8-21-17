import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
    	  // 	//VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
		//EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"
    	<h1>Hello, {this.props.name}</h1>
    )
  }
}
export default Header;