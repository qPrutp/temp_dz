import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Nav, Alert } from 'react-bootstrap'

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container>
                <Row>
                    <Col className="pt-3">
                        <Alert variant="danger">
                            Home Page!
                        </Alert>
                    </Col>
                    <Col>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link eventKey="link-1">Test 1</Nav.Link>
                            <Nav.Link eventKey="link-2">Test 3</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Test 5
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
