import { Accordion, Col, FormGroup, Row } from "react-bootstrap";
import {FaUserCircle} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import "../index.css"
function Library(){
    return (
        <div>
            <div className="Library">
                <div  className="col-12 ">
                    <div  className="card">
                        <FormGroup>
                            <Row className="fixed">
                            <FaUserCircle size="5rem"/>
                            <Col sm="3" lg="3" md="3" >
                            <Form.Control plaintext  defaultValue="사용자이력" className="text-center"/>
                            </Col>
                            <Col sm="3" lg="3" md="3">
                            <Form.Control plaintext  defaultValue="사용자 배지명" className="text-center"/>
                            </Col>
                            <Col sm="3" lg="3" md="3">
                            <Form.Control plaintext  defaultValue="사용자 포인트" className="text-center"/>
                            </Col>
                            <Col sm="3" lg="3" md="3">
                            <Form.Control plaintext  defaultValue="사용자 정보변경" className="text-center"/>
                            </Col>
                            </Row>
                        </FormGroup>
                    </div>
                </div>
                <br/>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header> datasets최근에 본 것 </Accordion.Header>
                    <Accordion.Body>
                        <div className="card">
                        <div className='row'>
                            <img src="cat_2.jpg"  style={{width:"100px",height:"50px"}} alt=""/>
                            <h5 className="col-9">title</h5>
                        </div>
                    </div>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>datasets다운로드 받은 것 </Accordion.Header>
                    <Accordion.Body>
                    <div className="card">
                        <div className='row'>
                            <img src="cat_2.jpg"  style={{width:"100px",height:"50px"}} alt=""/>
                            <h5 className="col-9">title</h5>
                        </div>
                    </div>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>code 최근에 본 것 </Accordion.Header>
                    <Accordion.Body>
                    <div className="card">
                        <div className='row'>
                            <img src="cat_2.jpg"  style={{width:"100px",height:"50px"}} alt=""/>
                            <h5 className="col-9">title</h5>
                        </div>
                    </div>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>code 다운로드 받은 것 </Accordion.Header>
                    <Accordion.Body>
                    <div className="card">
                        <div className='row'>
                            <img src="cat_2.jpg"  style={{width:"100px",height:"50px"}} alt=""/>
                            <h5 className="col-9">title</h5>
                        </div>
                    </div>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/>
            </div>
        </div>
    );
}
    export default Library