import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <br />
            <hr className="rule" />
            <br />
            <Jumbotron className="Jumbotron1">
                <Container fluid>
                    <Row>
                        <Col>
                            <Link className="footerlink" to='/about'>About</Link>
                        </Col>
                        <Col>
                            <Link className="footerlink" to='/Contact-Us'>Contact Us</Link>
                        </Col>
                        <Col>
                            <Link className="footerlink" to='Help-and-Support'>Help and Support</Link>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Footer