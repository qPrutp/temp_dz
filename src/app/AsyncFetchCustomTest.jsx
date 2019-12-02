import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from './ui/InfoBlock.jsx'

class AsyncFetchCustomTest extends React.Component {
    static defaultProps = {
        title: 'default title AsyncFetchCustomTest',
        loadingFunc: () => console.log('empty loadingFunc'),
        errorFunc: () => console.log('empty errorFunc'),
        loadedFunc: (res) => console.log('empty loadingFunc', res)
    }

    state = {
        loading: false,
        error: false,
        success: false,
        response: {}
    }

    startFetchRequest = async () => {
        const { loadingFunc, errorFunc, loadedFunc } = this.props
        loadingFunc()
        this.setState({
            error: false,
            success: false,
            loading: true
        })
        
        try {
            const res = await fetch('http://dummy.restapiexample.com/api/v1/employee/1')
            if (!res.ok) {
                this.setState({
                    error: true,
                    loading: false
                })
                throw Error(res.statusText)
            }
            const json = await res.json()
            document.getElementById("demo_fetch").innerHTML = JSON.stringify(json, undefined, 2)
            
            loadedFunc(json)
            this.setState({
                success: true,
                loading: false,
                response: json
            })
        } catch (error) {
            errorFunc(error)
            this.setState({
                error: true,
                success: false,
                loading: false
            })
        }
    }

    startXMLHttpRequestRequest = () => {
        let xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest()
          } else if (window.ActiveXObject) {
            try {
                xhttp = new ActiveXObject('Msxml2.XMLHTTP');
            } 
            catch (e) {
              try {
                xhttp = new ActiveXObject('Microsoft.XMLHTTP');
              } 
              catch (e) {}
            }
          }
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("demo_xhttp").innerHTML = this.responseText
            }
          }
          xhttp.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1', true)
          xhttp.send(null)
    }

    render() {
        const { title } = this.props;
        const { loading, error, success } = this.state;
        return (
            <div className="asyncFetchCustomTest">
                <p>{title}</p>
                <div>
                    <p id="demo_fetch">Let Fetch change this text.</p>
                    <div style={{minHeight: '25px'}}>
                        {loading && <InfoBlock>loading ...</InfoBlock>}
                        {error && <InfoBlock>error</InfoBlock>}
                        {success && <InfoBlock>success</InfoBlock>}
                    </div>
                    <button
                        onClick={this.startFetchRequest}
                    >test async fetch</button>
                </div>
                <div>
                    <p id="demo_xhttp">Let AJAX change this text.</p>
                    <button
                        onClick={this.startXMLHttpRequestRequest}
                    >test XMLHttpRequest</button>
                </div>
            </div>
        )
    }
}

AsyncFetchCustomTest.propTypes = {
    loadingFunc: PropTypes.func,
    errorFunc: PropTypes.func,
    loadedFunc: PropTypes.func,
    title: PropTypes.string
}

export default AsyncFetchCustomTest
