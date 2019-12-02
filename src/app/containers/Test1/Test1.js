import React from 'react'
import { connect } from 'react-redux'
import { compose } from '../../utils'
import { withAppService } from '../../components/Hoc'
import { Helmet } from 'react-helmet'
import { Container, Row, Col, Nav, ButtonToolbar, Button, Spinner, Alert } from 'react-bootstrap'
import {
    printGlobalProps
} from '../../actions'

class Test1 extends React.Component {
    state = {
        id: 1,
        loading: false,
        error: false,
        success: false,
        response: {}
    }

    getFetch = async() => {
        this.setState({
            error: false,
            success: false,
            loading: true
        })

        try {
            const response = await this.props.getEmployee(this.state.id)

            return this.setState({
                success: true,
                loading: false,
                response
            })
        } catch (error) {
            console.error('Щось пішло не так із Test1 getFetch!')
            this.setState({
                error: true,
                success: false,
                loading: false
            })
        }
    }

    render() {
        const { loading, error, success } = this.state;
        return (
            <Container>
                <Helmet>
                    <title>Test 1</title>
                </Helmet>
                
                <Row className="pt-3">
                    <Col>
                        <Alert variant="danger">
                            Test 1 Page!
                        </Alert>
                        <ButtonToolbar>
                            <Button
                                onClick={this.getFetch}
                                variant="outline-primary"
                            >
                                    {loading && <Spinner animation="grow" size="sm" variant="light" />}
                                    {success && <Spinner animation="grow" size="sm" variant="success" />}
                                    {error && <Spinner animation="grow" size="sm" variant="warning" />}
                                    Fetch
                            </Button>
                            <Button
                                onClick={this.props.printGlobalProps}
                                variant="outline-info">Props</Button>
                            <Button
                                onClick={() => console.log(this.state)}
                                variant="outline-info">State</Button>
                        </ButtonToolbar>
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
        )
    }
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { appService } = ownProps
    return {
        printGlobalProps: () => dispatch(printGlobalProps()),
        getEmployee: id => appService.getEmployee(id)
    };
};

export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Test1)
