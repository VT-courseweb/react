import React from "react";
import ReactDOM from "react-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import  {Button}  from 'react-bootstrap';
import {RiDeleteBack2Fill} from 'react-icons/ri';
//토글 버튼 디자인부분 
import './Togglebtn.css';

function Upload(){
    return (
        <div>
            <Form.Group as={Row} className="mb-3 mt-3" controlId="formtitle">
                <Col sm="11">
                    <Form.Control type="input" placeholder="Title"/>
                </Col>
                <Col sm="1">
                <Button variant="secondary"><RiDeleteBack2Fill/></Button>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3" controlId="formadd">
                <Form.Label column sm="2">www.Kkaggle.com/</Form.Label>
                <Col sm="10">
                    <Form.Control className="text-filed" placeholder="Datasets와 Code upload에 대한 주소" ></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 mt-3" controlId="codecheck">
            <Form.Label column sm="3">Code 에서 비º공개 여부 </Form.Label>
            {/* 토글 버튼 부분 */}
            <div className="col-sm-1">
                <div className="row">
                <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider"></span>
                </label>
                </div>
            </div>
            <Form.Label column sm="3">DataSets 라이선스 여부 </Form.Label>
                <div className="col-sm-1">
                    <div className="row">
                        <label className="switch">
                            <input type="checkbox"></input>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
                <Form.Label column sm="3">DataSets 공모전 여부 </Form.Label>
                <div className="col-sm-1">
                    <div className="row">
                        <label className="switch">
                            <input type="checkbox"></input>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                <Form.Control type="file" multiple />
            </Form.Group>
            <div className="d-grid">
            <Button variant="secondary" size="lg">save</Button>
            </div>
            <br/>
        </div>
    );
}
    export default Upload