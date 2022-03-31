import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import  {Button}  from 'react-bootstrap';
import {RiDeleteBack2Fill} from 'react-icons/ri';

function Upload(){
    return (
        <div>
            <h1>Uploadpage</h1>
            <br/>
            <Row className="mt-2 mr-2 ml-2 mb-2 d-fixed">
            <Col sm ="10">
                <Form.Control type="Datasettitle" placeholder="Enter Dataset Title" className="mb-3" aria-label="delete"></Form.Control>
            </Col>
            <Col sm="2">
                <Button variant="secondary"><RiDeleteBack2Fill/></Button>
            </Col>
            </Row>
            <Row className="mt-2 mr-1 ml-1 mb-2 d-fixed">
                <Col sm="2">
                <Form.Control plaintext readOnly defaultValue="www.Kkaggle.com/Datasetes/"/>
                </Col>
                <Col sm="8">
                <Form.Control class="text-filed" ></Form.Control>
                </Col>
                <Col sm="1">
                    <Button variant="secondary">Download</Button>
                </Col>
            </Row>
            <Form.Control type="file" className="mb-3" />

            <div className="d-grid">
            <Button variant="secondary" size="lg">save</Button>
            </div>
            <br/>
        </div>
        
    );
}
    export default Upload