import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Alert } from 'react-bootstrap'
import RowMain from '../../components/RowMain'

const Home = () => {

    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <RowMain
                left={(
                    <Alert variant="danger">
                        Home Page!
                    </Alert>)}
            />
        </Container>
    )
}

export default Home
