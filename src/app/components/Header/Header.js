import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './style.scss';

import { rootHref } from '../../config'

class Header extends React.Component {
    render() {

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={rootHref}>Boilerplate!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav-1" />
                    <Navbar.Collapse id="responsive-navbar-nav-1">
                        <Nav className="mr-auto">
                        <Nav.Link href={`${rootHref}test1`}>Test 1</Nav.Link>
                        <Nav.Link href={`${rootHref}test2/2`}>Test 2</Nav.Link>
                        <NavDropdown title="Test 2-5" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/test2/1">Test 2</NavDropdown.Item>
                            <NavDropdown.Item href="/test3/1/2">Test 3</NavDropdown.Item>
                            <NavDropdown.Item href="/test4/1/2/3">Test 4</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/test5/1/2/3/4">Test 5</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
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
