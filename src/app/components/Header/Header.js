import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './style.scss';

import { rootHref } from '../../config'

class Header extends React.Component {
    render() {

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={rootHref}>Boilerplate!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav-1" />
                    <Navbar.Collapse id="responsive-navbar-nav-1">
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to={`${rootHref}test1`}>Test 1</Nav.Link>
                        <Nav.Link as={Link} to={`${rootHref}test2/2`}>Test 2</Nav.Link>
                        <NavDropdown title="Test 3-5" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/test3/1/2">Test 3</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/test4/1/2/3">Test 4</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/test5/1/2/3/4">Test 5</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
