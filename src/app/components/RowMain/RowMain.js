import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Nav} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.scss'
import { rootHref } from '../../config'

const RowMain = ({ left, right }) => {
    
    return (
        <Row className="pt-3">
            <Col>
                {left}
            </Col>
            <Col md={3}>
                {right ?
                    right
                    :   (<Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link as={Link} to={rootHref}>Home</Nav.Link>
                            <Nav.Link eventKey="link-1">Test 1</Nav.Link>
                            <Nav.Link eventKey="link-2">Test 3</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Test 5
                            </Nav.Link>
                        </Nav>)}
            </Col>
        </Row>
    )
}

RowMain.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default RowMain
