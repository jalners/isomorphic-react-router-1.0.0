import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <ul className="nav">
        <li className="nav__item"><Link to="/" activeClassName="active">Home</Link></li>
        <li className="nav__item"><Link to="/about" activeClassName="active">About</Link></li>
      </ul>  
    );
  }
};