import React from 'react'
import Link from 'next/link'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <Navbar color="faded" light toggleable fixed="top">
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">TalkXXX</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/" className="navlink-item">Categories</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/" className="navlink-item">Log in</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" className="navlink-item">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" className="navlink-item">For companies</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
        <style jsx>{`
          // .navbar-wrapper {
          //   opacity: 0.1;
          // }
          // .navlink-item {
          //   color: #fff;
          // }
        `}
        </style>
      </div>
    );
  }
}