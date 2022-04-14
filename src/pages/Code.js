import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../index.css";
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

/* 검색부분*/
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import {BsSearch} from 'react-icons/bs';                //검색 버튼 아이콘 

/*card 아이콘 부분 */
import {FcNext} from 'react-icons/fc';              // 단계 표시(화살표)아이콘
import {AiFillHeart} from 'react-icons/ai';         //하트 아이콘
import {MdOutlineAddBox} from 'react-icons/md';     //더하기(+) 아이콘
import {AiOutlineArrowDown} from 'react-icons/ai';  //다운로드 아이콘


/*라이센스 아이콘*/
import {FaCreativeCommons} from 'react-icons/fa';   // cc아이콘         -> CC
import {FaCreativeCommonsBy} from 'react-icons/fa'; // 사람아이콘       -> BY
import {FaCreativeCommonsNc} from 'react-icons/fa'; // 달러 금지 아이콘 -> NC
import {FaCreativeCommonsSa} from 'react-icons/fa'; // 뒤로 회전 아이콘 -> SA 
import {FaCreativeCommonsNd} from 'react-icons/fa'; // 같다(=)아이콘    -> ND


import Step from './Step';
import Step2 from './Step2';

function Code(){
    const [value, setValue] = useState([1, 3]);
    const ButtonChange = (val) => setValue(val);
    
    const [stepValue, setStepValue] = useState('1');
    const stepChange = [
        { name: '접수대기', value: '1' },
        { name: '접수완료', value: '2' },
        { name: '심사중..', value: '3' },
        { name: '심사완료', value: '4' },
      ];

    return (
        <div>
        <div className="Container">
            <div class="row">
                <div class="col-md-1 col-xs-6 sidebar">
                    <ul class="nav nav-sidebar">
                        <li>
                            <Form className="d-flex">
                                <FormControl type="search" placeholder="Search" aria-label="Search" ></FormControl>
                                <Button variant="primary" ><BsSearch/></Button>
                            </Form>
                        </li>
                        <span><font color='red'>이 부분에 들어간 내용회의필요</font></span>
                        <li class="active"><a href="#">최근일</a></li>
                        <li><a href="#">조회순</a></li>
                        <li><a href="#">다운로드순 </a></li>
                        <li><a href="#">Reward</a></li>
                        <li><a href="#">해시태그1</a></li>
                        <li><a href="#">해시태그2</a></li>
                        <li><a href="#">해시태그3</a></li>
                        <li><a href="#">해시태그4</a></li>
                    </ul>
                
                </div>
            </div>
            <div className="card_mian">
                    <p><font color='red'>저번회의 때 필터 아직 필요없지 않나 이야기가 나오긴함</font></p>
                    <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" aria-label="Search" ></FormControl>
                    <Button variant="primary" ><BsSearch/></Button>
                    </Form>
                    <br/>
                    <div className="row">
                        <div className="col-3">
                            <div className="card" >
                                    <img className="card-img"  src="cat.jpg" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">title</h5>
                                        <p className="card-text">요약 내용</p>
                                        <hr/>
                                        <h6 className="card-text" >생성자</h6>
                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                        <hr/>
                                        <Step/>
                                    </div>
                                    <div className="card-footer d-grid ">
                                        <Button href="./Codedetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                        <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/>  <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> <br/>CC BY NC SA ND </Button>{' '}
                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <img className="card-img"  src="cat.jpg" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">title</h5>
                                    <p className="card-text">요약 내용</p>
                                    <hr/>
                                    <h6 className="card-text" >생성자</h6>
                                    <h6 className="card-text" >생성일자 및 등록일자</h6>
                                    <hr/>
                                    <Step2/>
                                </div>
                                <div className="card-footer text-center ">
                                    <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox size="15px"/></Button>{' '}
                                    <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart size="15px"/></Button>{' '}
                                    <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown size="15px"/></Button>
                                    <div className="text-center d-grid">
                                        <Button className="btn btn-secondary  mt-1 ml-1 mb-1 mr-1" size="sm"  disabled>
                                            &nbsp;<FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy/>&nbsp;<FaCreativeCommonsNc/>&nbsp;
                                            <FaCreativeCommonsSa/>&nbsp;<FaCreativeCommonsNd/>
                                            <br/>&nbsp;&nbsp;CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND  
                                        </Button>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <img className="card-img"  src="cat.jpg" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">title</h5>
                                    <p className="card-text">요약 내용</p>
                                    <hr/>
                                    <h6 className="card-text" >생성자</h6>
                                    <h6 className="card-text" >생성일자 및 등록일자</h6>
                                    <hr/>
                                    <Step/>
                                </div>
                                <div className="card-footer">
                                    <ButtonGroup className="mt-1 mb-1 mr-1 ml-1">
                                        <Button href="./Datasetsdetail" className="btn btn-primary" size="sm"><MdOutlineAddBox/><br/>더보기</Button>{' '}
                                        <Button className="btn btn-danger" size="sm"><AiFillHeart/><br/>좋아요</Button>{' '}
                                        <Button className="btn btn-info" size="sm"><AiOutlineArrowDown/><br/>다운로드</Button>{' '}
                                        <Button className="btn btn-secondary" size="sm" disabled> 
                                        <FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsSa/>
                                        {/*<FaCreativeCommonsNd/> */}<br/>CCBYNCSA{/*ND*/}
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                    <img className="card-img"  src="cat.jpg" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">title</h5>
                                        <p className="card-text">요약 내용</p>
                                        <hr/>
                                        <h6 className="card-text" >생성자</h6>
                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                        <hr/>
                                        <Step2/>
                                    </div>
                                    <div className="card-footer d-grid ">
                                        <Button href="./Codedetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>{' '}
                                        <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/>  <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> <br/>CC BY NC SA ND </Button>{' '}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}export default Code;