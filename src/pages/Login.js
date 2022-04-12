import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import "../index.css";

function Login(){
    return (
        <div>
            <h1>Loginpage</h1>
            <br/>
            <div className="Login">
            <Container className="panel col-md-5 mx-auto" >
                <Form>
                    <Form.Group as ={Row} controlId="formPlaintextUserID">
                        <Form.Label column sm ={3}>UserID</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="input" placeholder="UserID" />
                        </Col>
                    </Form.Group>
                    <Form.Group as ={Row} controlId="formPlaintextPassword" className= "mr-1 ml-1 mt-2 mb-1">
                        <Form.Label column sm ={3}>Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="Password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group className= "mt-3" >
                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="로그인 유지하기"/>
                    </Form.Group>
                    <br/>
                    <div className="d-grid gap-1" >
                        <Button variant="secondary" type="submit" >
                            Sign In
                        </Button>
                    </div>
                </Form>
                <div className="mt-3 mb-3" style={{textAlign:"center"}}>
                    <p><span> 아직 회원이 아니신가요? </span><a href="./Register"> 가입하기 </a></p>
                    <p><span> 비밀 번호를 잊으셨나요? </span><a href="./FindPW">번호 찾기</a> </p>
                </div>
            </Container>
            <hr/>
            <Container className="panel col-md-5 mx-auto">
                <Form>
                    <Form.Group className= "mr-1 ml-1 mt-1 mb-1" style={{textAlign:"center"}}>
                        <Form.Label>소셜 로그인 부분</Form.Label>
                    </Form.Group>
                    <div className="d-grid gap-1" >
                         <img src="kakao_login_medium.png" alt="kakao_login_medium" ></img> 
                    </div>
                </Form>
            </Container>
            <br/>
            </div>
        </div>
    )
}

export default Login;


