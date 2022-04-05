import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import  {Button}  from 'react-bootstrap';
import {RiDeleteBack2Fill} from 'react-icons/ri';

function Upload(){
    return (
        <div>
            <Row className="mt-2 mr-2 ml-2 mb-2 d-fixed">
            <Col sm ="10">
                <Form.Control type="input" placeholder="Enter Dataset Title"/>
            </Col>
            <Col sm="2">
                <Button variant="secondary"><RiDeleteBack2Fill/></Button>
            </Col>
            </Row>
            <Row className="mt-2 mr-1 ml-1 mb-2 d-fixed">
                <Col sm="3">
                <Form.Control type="readOnly" className='plaintext readOnly' defaultValue="www.Kkaggle.com/"/>
                </Col>
                <Col sm="7">
                <Form.Control className="text-filed" ></Form.Control>
                </Col>
                <Col sm="1">
                    <Button variant="secondary">Download</Button>
                </Col>
            </Row>
            
           
            <div className="d-grid">
            <Button variant="secondary" size="lg">save</Button>
            </div>
            <br/>
        </div>
        
    );
}
    export default Upload