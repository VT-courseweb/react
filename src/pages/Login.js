import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Login(){
    return (
        <div>
            <Container className="panel">
                <Form >
                    <Form.Group as ={Row} className=" mt-3 mb-3" controlId="formPlaintextUserID">
                        <Form.Label column sm = {1}>UserID</Form.Label>
                        <Col sm={11}>
                            <Form.Control type="UserID" placeholder="UserID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as ={Row} className=" mt-3 mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm = {1}>Password</Form.Label>
                        <Col sm={11}>
                            <Form.Control type="Password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <br/>
                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" >
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login


