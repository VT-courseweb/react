import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ToastContainer from "react-bootstrap/ToastContainer";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
// import { TextCenter } from "react-bootstrap-icons;
import ImageButton from 'react-image-button';

function Login(){
    return (
        <div>
            <h1>Loginpage</h1>
            <br/>
          <Container className="panel col-md-5 mx-auto" > 
            <Form>
                <Form.Group as ={Row} controlId="formPlaintextUserID" className= "mr-1 ml-1 mt-1 mb-1">
                    <Form.Label column sm ={3}>UserID</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="UserID" placeholder="UserID" />
                    </Col>
                </Form.Group>
                <Form.Group as ={Row} controlId="formPlaintextPassword" className= "mr-1 ml-1 mt-2 mb-1">
                    <Form.Label column sm ={3}>Password</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="Password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group className= "mt-3">
                    <Form.Check type="checkbox" id="disabledFieldsetCheck" label="로그인 유지하기"/>
                </Form.Group>
                <br/>
                <div className="d-grid gap-1">
                    {/* <Link to="/"> */}
                    <Button variant="secondary" type="submit" >Sign In</Button>
                    {/* </Link> */}
                </div>
            </Form>
            <div className="mt-3 mb-3" style={{textAlign:"center"}}>
                <p><span> 아직 회원이 아니신가요? </span><a href="./Regester"> 가입하기 </a></p>
                <p><span> 비밀 번호를 잊으셨나요? </span><a href=""> 번호찾기 </a></p>
            </div>
            </Container>
            <hr/>
            <Container className="panel col-md-5 mx-auto">
                <Form>
                    <Form.Group className= "mr-1 ml-1 mt-1 mb-1" style={{textAlign:"center"}}>
                        <Form.Label>소셜 로그인 부분</Form.Label>
                    </Form.Group>
                    <div className="d-grid gap-1" >
                         <img src="kakao_login_medium.png"></img> 
                    </div>
                </Form>
            </Container>
            <ImageButton ></ImageButton>
        </div>
    );
}

export default Login


