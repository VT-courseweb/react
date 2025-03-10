import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "../index.css";

function Register() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value);
    };
    const onChangeEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        if (!userId) setUserIdError(true);
        if (!password) setPasswordError(true);
        if (!confirmPassword) setConfirmPasswordError(true);
        if (!userName) setUserNameError(true);
        if (!email) setEmailError(true);

        if (userId && password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if (validation()) return;

        // API Call


    }

    return (
        <div>
            <div className="Register">
            <Container className="panel col-md-5 mx-auto">
                <Form>
                    <Form.Group as={Row} className="mt-3 smb-3">
                        <Form.Label column sm={4}>UserId</Form.Label>
                        <Col sm={8}>
                            <Form.Control maxLength={20} type="input" placeholder="UserID" value={userId} onChange={onChangeUserId} />
                            {userIdError && <div className="invalid-input" style={{ color: "#FF0000" }}>
                                <span>아이디는 영문 5자 이상 영문 또는 숫자를 포함해야 합니다.</span>
                            </div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className=" mt-3 mb-3">
                        <Form.Label column sm={4}>Password</Form.Label>
                        <Col sm={8}>
                            <Form.Control maxLength={20} type="password" placeholder="Password" value={password} onChange={onChangePassword} />

                            {passwordError && <div className="invalid-input" style={{ color: "#FF0000" }}>
                                <span>비밀번호는 최소 8자 이상이어야 하며 최소 하나의 문자와 하나의 숫자를 포함해야 합니다.</span>
                            </div>}
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3">
                        <Form.Label column sm={4}>ConfirPW</Form.Label>{/*ConfirmPword*/}
                        <Col sm={8}>
                            <Form.Control maxLength={20} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
                            {confirmPasswordError && <div className="invalid-input" style={{ color: "#FF0000" }}>
                                <span> 비밀번호가 맞지않습니다.</span>
                            </div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3">
                        <Form.Label column sm={4}>Username</Form.Label>
                        <Col sm={8}>
                            <Form.Control maxLength={20} type="input" placeholder="Username" value={userName} onChange={onChangeUserName} />
                            {userNameError && <div class="invalid-input" style={{ color: "#FF0000" }}>
                                <span>필수입니다.</span>
                            </div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-3 mb-3">
                        <Form.Label column sm={4}>Email</Form.Label>
                        <Col sm={8}>
                            <Form.Control maxLength={50} type="input" placeholder="name@example.com" value={email} onChange={onChangeEmail} />
                            {emailError && <div className="invalid-input" style={{ color: "#FF0000" }}>
                                <span>유효한 이메일 형식을 입력하세요.</span>
                            </div>}
                        </Col>
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" onClick={onSubmit}>Submit</Button>
                    </div>
                </Form>
                <br />
                <span className="text">이미 가입되어 있나요? <Link to="/login" className="link">Sign In</Link></span>

            </Container>
            <br/>
            </div>
        </div>
    );
}

export default Register
