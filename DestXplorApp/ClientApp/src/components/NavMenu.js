import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white transparent bg-dark" light>
        <Container>
          <NavbarBrand className="text-light" tag={Link} to="/">DestXplor</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light mx-2 hidden-border" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light mx-2 hidden-border" to="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light mx-2 hidden-border" to="/destinations">Destinations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light mx-2 hidden-border" to="/contact">Contact Us</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
