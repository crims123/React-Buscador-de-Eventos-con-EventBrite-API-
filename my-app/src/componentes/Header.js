import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="uk-margin" uk-margin="true" >
        	<h1 className="uk-text-center" >{this.props.titulo} </h1>
      </header>
    );
  }
}

export default Header;
