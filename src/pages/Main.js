import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";


function Main(){
    return (
        <div>
            <br></br>
            <Card>
                <Card.Header>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-secondary">Secondary</Button>
                    <Button variant="outline-success">Success</Button>
                    <Button variant="outline-warning">Warning</Button>
                    <Button variant="outline-danger">Danger</Button>
                    <Button variant="outline-info">Info</Button>
                    <Button variant="outline-light">Light</Button>
                    <Button variant="outline-dark">Dark</Button>
                </Card.Header>
            </Card>
            <br></br>
            
            <Card style={{ width: '18rem' }} >
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            <br></br>
            <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            <br></br>
            <CardGroup></CardGroup>
            <br></br>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2}).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            <br></br>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>                            
            <Button  variant="primary" a href="https://react-bootstrap.netlify.app/components/modal/">
                modal예시 사이트
            </Button>
            </div>
    );
}

export default Main