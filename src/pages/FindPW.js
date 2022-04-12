import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';

function FindPW(){
    return (
        <div>
            <div className="FindPWpage">
                <h1>FindPWpage</h1>
                <br/>
                <Container className="panel col-md-5 mx-auto" >
                    <Form>
                        <Form.Group as ={Row} controlId="formPlaintextName" className= "mr-1 ml-1 mt-1 mb-1">
                            <Form.Label column sm ={3}>이름</Form.Label>
                            <Col sm={9}>
                                <Form.Control type="input" placeholder="Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} controlId="formPlaintextPoneno" className= "mr-1 ml-1 mt-2 mb-1">
                            <Form.Label column sm ={3}>휴대전화</Form.Label>
                            <Col sm={3}>
                            <select id="inputPoneno1" className="form-control">
                                <option selected>+82</option>
                                <option>...</option>
                            </select>
                            </Col>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="전화번호입력" />
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} controlId="formCertificationNumber" className= "mr-1 ml-1 mt-2 mb-1">
                            <Form.Label column sm ={3}>인증번호 입력</Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="인증번호" />
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} controlId="formPlaintextPassword" className= "mr-1 ml-1 mt-2 mb-1">
                            <Form.Label column sm ={3}>비밀번호</Form.Label>
                            <Col sm={9}>
                                <Form.Control type="Password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as ={Row} controlId="formPlaintextRePassword" className= "mr-1 ml-1 mt-2 mb-1">
                            <Form.Label column sm ={3}>비밀번호재확인</Form.Label>
                            <Col sm={9}>
                                <Form.Control type="Password" placeholder="RePassword" />
                            </Col>
                        </Form.Group>
                        <br/>
                        <div className="d-grid gap-1" >
                            <Button variant="secondary" type="button" href="./Login" >
                                로그인 화면으로 
                            </Button>
                        </div>
                    </Form>
                </Container>
                <br/>
            </div>
        </div>
    )
}

export default FindPW;


