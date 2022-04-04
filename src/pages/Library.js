import { Accordion, Col, FormGroup, Row } from "react-bootstrap";
import {FaUserCircle} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

function Library(){
    return (
        <div>
            <h1>Librarypage</h1>
            <div class="col-xl-12 ">
                <div class="card">
                    <FormGroup>
                        <Row className="d-fixed">
                        <FaUserCircle size="5rem"/>
                        <Col sm="4" >
                        <Form.Control plaintext readOnly defaultValue="사용자등급" className="text-center"/>
                         </Col>
                        <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue="사용자아이디" className="text-center"/>
                        </Col>
                        <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue="사용자 주소" className="text-center"/>
                        </Col>
                        </Row>
                    </FormGroup>
                </div>
            </div>
            <br/>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header> datasets최근에 본 것 </Accordion.Header>
                <Accordion.Body>최근에 본 것</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>datasets다운로드 받은 것 </Accordion.Header>
                <Accordion.Body>다운로드 받은 것</Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br/>
        </div>
    );
}
    export default Library