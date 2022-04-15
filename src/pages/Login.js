import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import "../index.css";

function Login(){
   
    const KAKAO_AUTH_URL="https://kauth.kakao.com/?client_id={3086baea29c26560bb218f8d838982ec}&redirect_uri={http://localhost:3000}&response_type=code";
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
                    {/* curl -X POST "https://kapi.kakao.com/v1/user/logout" \
	                    -H "Content-Type: application/x-www-form-urlencoded" \
	                    -H "Authorization: Bearer "
                        "id":float9876543211234
                        Logout Redirect URI	: http://localhost:3000
                        네이티브 앱 키 :    9af3b66fbb681575083e4fc9ed29be88	
                        REST API 키	   :    ce98ae4e373b7ff2e5947f053a09b71a	
                        JavaScript 키:	    8a764b966d8c819fedda47dc84088eeb	
                        Admin 키	  :     3086baea29c26560bb218f8d838982ec
                        */}
                        {/* 1.https://kauth.kakao.com/ 2.https://kauth.kakao.com/oauth/authorize  3.https://kauth.kakao.com/v1/user/  4.https://kauth.kakao.com/oauth/token*/}
                    <a href={KAKAO_AUTH_URL}>
                        <img src="kakao_login_medium.png" alt="카카오 로그인 버튼"/>
                    </a>
                </Form>
            </Container>
            <br/>
            </div>
        </div>
    )
}

export default Login;


