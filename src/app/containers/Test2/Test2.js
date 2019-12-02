import React from 'react'
import { connect } from 'react-redux'
import { compose } from '../../utils'
import { withAppService } from '../../components/Hoc'
import { Helmet } from 'react-helmet'
import { Container, ButtonToolbar, Button, Alert } from 'react-bootstrap'
import {
    printGlobalProps
} from '../../actions'
import RowMain from '../../components/RowMain'

class Test2 extends React.Component {
    state = {
        id: 1,
        loading: false,
        error: false,
        success: false,
        response: {}
    }

    startXMLHttpRequest = () => {
        this.setState({
            error: false,
            success: false,
            loading: true
        })
        
        let xhttp
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
            try {
                xhttp = new ActiveXObject('Msxml2.XMLHTTP')
            }
            catch (e) {
                try {
                    xhttp = new ActiveXObject('Microsoft.XMLHTTP')
                }
                catch (e) { }
            }
        }
        xhttp.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1', true)
        xhttp.onload = function (e) {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.setState({
                    success: true,
                    loading: false,
                    response: JSON.parse(xhttp.responseText)
                })
                console.log(xhttp.responseText)
            } else {
                console.error('Щось пішло не так із Test2 startXMLHttpRequest!')
                console.error(xhr.statusText)
                this.setState({
                    error: true,
                    success: false,
                    loading: false
                })
            }
        }.bind(this)

        xhttp.send(null)
    }

    render() {
        const { loading, error, success } = this.state
        return (
            <Container>
                <Helmet>
                    <title>Test 2</title>
                </Helmet>
                
                <RowMain
                    left={(
                        <React.Fragment>
                            <Alert variant="danger">
                                Test 2 Page!&#8195;
                                {loading && 'loading...'}
                                {success && 'success'}
                                {error && 'error'}
                            </Alert>
                            <ButtonToolbar>
                                <Button
                                    onClick={this.startXMLHttpRequest}
                                    variant="outline-primary">XMLHttpRequest</Button>
                                <Button
                                    onClick={this.props.printGlobalProps}
                                    variant="outline-info">Props</Button>
                                <Button
                                    onClick={() => console.log(this.state)}
                                    variant="outline-info">State</Button>
                            </ButtonToolbar>
                        </React.Fragment>)}
                />
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
)(Test2)
