import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://sazzad24x7.github.io">sazzad24x7</a>
            </div>
            <ul className="navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Create Product</Link></li>
              <li><Link to="display-item">Products</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
