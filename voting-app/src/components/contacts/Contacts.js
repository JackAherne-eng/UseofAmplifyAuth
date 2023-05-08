import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

function Contacts() {
    return (
        <Container>
            <Row classname="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Col classname="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img
                            src="/img/contact-image.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>John Smith</Card.Title>
                            <Card.Text>
                                Green Party
                                <br />Arklow, County Wicklow; Farmer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col classname="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img
                            src="/img/contact-image2.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Sean Glynn</Card.Title>
                            <Card.Text>
                                Sinn Fein
                                <br />Navan, County Meath; Local Volunteer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col classname="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img
                            src="/img/contact-image3.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>James McCorry</Card.Title>
                            <Card.Text>
                                Finna Gael
                                <br />Blackrock, County Dublin; Solicitor
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;