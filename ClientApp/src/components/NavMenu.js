import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.scss';
import '../Styles/Constants.scss'
import '../Styles/Styles.scss'

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
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-style" light>
          <Container className="navbar-style">
            <NavbarBrand className="title" tag={Link} to="/">Narnia</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse navbar-style" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow navbar-style">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/AddAnimal">Add Animal</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/SearchAnimal">Search Animal</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/AnimalType">Animal Type</NavLink>
                </NavItem>
                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
