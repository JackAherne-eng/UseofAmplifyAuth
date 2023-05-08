import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function HomePage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/img/votingballot.png"
                        fluid />
                </Col>
                <Col sm={6}>
                <h1 className="font-weight-light">Voting App</h1>
                <p className="mt-4">
                        Lorem Ipsum
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum viverra dolor a porttitor. 
                        Phasellus porta leo eget suscipit elementum. In eu eros neque. Duis ut libero ac massa finibus dapibus nec id diam. 
                        Quisque bibendum nibh a nisl tempus, sed mollis dui fringilla. Etiam blandit gravida interdum. Duis in gravida felis. 
                        Nullam congue neque ut sagittis fringilla.
                    </p>
                    <Button varient="outline-primary">Learn More &gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;