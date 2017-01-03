import React from 'react';

/*traditional way of creating a prop class*/
/*
class Header extends React.Component {*/
/*  render () {*/

/*other option...*/
/*  function Header () {

  }
  var Header = function */

/*Stateless function*/
    const Header = (props) => {
    return (
     <header className="top">
        <h1>
        Catch
      <span className="ofThe">
        <span className="of"> of </span>
        <div className="the"> the </div>
      </span>
        Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
     </header>
      )
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
};


export default Header;
