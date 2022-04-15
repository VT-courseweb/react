import "../index.css"
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
//import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import {AiFillHeart} from 'react-icons/ai';         //하트 아이콘
import {MdOutlineAddBox} from 'react-icons/md';     //더하기(+) 아이콘
import {AiOutlineArrowDown} from 'react-icons/ai';  //다운로드 아이콘


/*라이센스 아이콘*/
import {FaCreativeCommons} from 'react-icons/fa';   // cc아이콘         -> CC
import {FaCreativeCommonsBy} from 'react-icons/fa'; // 사람아이콘       -> BY
import {FaCreativeCommonsNc} from 'react-icons/fa'; // 달러 금지 아이콘 -> NC
import {FaCreativeCommonsSa} from 'react-icons/fa'; // 뒤로 회전 아이콘 -> SA 
import {FaCreativeCommonsNd} from 'react-icons/fa'; // 같다(=)아이콘    -> ND

//  CC,BY       ->  저작자 표시 
//  CC,BY,NC    ->  저작자 표시- 비영리
//  CC,BY,ND    ->  저작자 표시- 변경금지
//  CC,BY,SA    ->  저작자 표시- 동일조건변경허락
//  CC,BY,NC,SA ->  저작자 표시- 비영리 - 동일조건변경허락
//  CC,BY,NC,ND ->  저작자 표시- 비영리 - 변경금지

import Step from './Step';
import Step2 from './Step2';

function Main(){
    return (
        <div>
            <div className="Main">
                {/* <h1>mainpage</h1>
                <br/> */}
                {/*사진 이미지 부분*/}
                <Carousel variant="info" className="col-lg-12 col-md-12 col-xs-12" >{/*variant="dark"*/}
                    <Carousel.Item >
                        <img className="d-block  Main_Img" src="cat_2.jpg" alt="First slide" />
                        {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className="d-block Main_Img" src="cat.jpg" alt="Third slide"/>
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
                {/*사이트 소개 부분*/}
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="card">
                        <h4 className="text-center">Kkgle이란?</h4>
                        <h6 className="text-center">
                            <br/>병원소속 의료진이 아닌 일반인들과 개발자들을 대상으로 하여 
                            데이터 정보를 열람, 다운, 코딩 공유, 공모전 등을 할 수 있는 사이트 입니다. 
                        </h6>
                    </div>
                    <br/>
                    <h4 className="text-center">Kkgle이란?</h4>
                        <h6 className="text-center">
                            <br/>병원소속 의료진이 아닌 일반인들과 개발자들을 대상으로 하여 
                            데이터 정보를 열람, 다운, 코딩 공유, 공모전 등을 할 수 있는 사이트 입니다. 
                        </h6>
                </div>
                <br/>
                {/*간략하게 보기(Datasets,Code) */}
                <div className="row">
                    {/*Datasets 부분*/}
                    <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="h3 text-right">Datasets</div>
                        <div className="datasets-tab">
                            <Tabs defaultActiveKey="new" id="datasets-tab">
                                <Tab eventKey="new" title="최신순" tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12">
                                            <div className="card" >
                                                    <img className="card-img"  src="cat.jpg" alt=""/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">title</h5>
                                                        <p className="card-text">요약 내용</p>
                                                        <hr/>
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <div className="d-grid">
                                                            <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/>  <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> <br/>CC BY NC SA ND </Button>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer d-grid ">
                                                        <Step/>
                                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요 15</Button>{' '}
                                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드 24</Button>
                                                        <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">자세히<MdOutlineAddBox/></Button>{' '}
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="card" >
                                                    <img className="card-img"  src="cat.jpg" alt=""/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">title</h5>
                                                        <p className="card-text">요약 내용</p>
                                                        <hr/>
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <h5 className="card-text col-12">대회배지
                                                        <img className="mt-1 ml-1 mb-1 mr-1 badge_Img" src="ba.png" alt=""/></h5>
                                                        <h6  className="card-text">진행단계</h6> <p><Step/></p>
                                                        <h6 className="card-text" >진행단계</h6>
                                                        <p><Step2/></p>
                                                        <hr/>
                                                        <div className="text-center d-grid">{/*d-grid */}
                                                            <Button className="btn btn-secondary  mt-1 ml-1 mb-1 mr-1" size="sm"  disabled>
                                                                &nbsp;<FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy/>&nbsp;<FaCreativeCommonsNc/>&nbsp;
                                                                <FaCreativeCommonsSa/>&nbsp;<FaCreativeCommonsNd/>
                                                                <br/>&nbsp;&nbsp;CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND  
                                                            </Button>{' '}
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Button className="btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart size="10px"/></Button>{' '}
                                                        <Button className="btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown size="10px"/></Button>{' '}
                                                        <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">자세히<MdOutlineAddBox size="10px"/></Button>{' '}
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Down" title="다운로드순" tabClassName="h6">
                                    <div className="row">   
                                        <div className="col-6">
                                            <div className="card" >
                                                <img className="card-img"  src="cat.jpg" alt=""/>
                                                <div className="card-body">
                                                    <h5 className="card-title">title</h5>
                                                    <p className="card-text">요약 내용</p>
                                                    <hr/>
                                                    <h5 className="card-text" >생성자</h5>
                                                    <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="license">
                                                        <h5 className="card-text " >라이센스</h5>
                                                        <div className="d-grid">
                                                            <Button className="btn btn-secondary   mt-1 ml-1 mb-1 mr-1" size="sm"  disabled>
                                                                &nbsp;<FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy/>&nbsp;<FaCreativeCommonsNc/>&nbsp;
                                                                <FaCreativeCommonsSa/>&nbsp;<FaCreativeCommonsNd/>
                                                                <br/>&nbsp;&nbsp;CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND
                                                            </Button>{' '}
                                                        </div>
                                                        </div>
                                                    <hr/>
                                                        <span> 대회, 진행단계가 있는  경우 나타남 </span>
                                                        <h5 className="card-text col-12">대회배지
                                                        <img className="mt-1 ml-1 mb-1 mr-1 badge_Img" src="ba.png" alt=""/></h5>
                                                        <h5 className="card-text col-12">진행단계<Step2/></h5>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-center ">
                                                    <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart size="15px"/><span>15</span></Button>{' '}
                                                    <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown size="15px"/><span>10</span></Button>{' '}
                                                    <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">자세히<MdOutlineAddBox size="15px"/></Button>{' '}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card" >
                                                <img className="card-img"  src="cat.jpg" alt=""/>
                                                <div className="card-body">
                                                    <h5 className="card-title">title</h5>
                                                    <p className="card-text">요약 내용</p>
                                                    <hr/>
                                                    <h5 className="card-text" >생성자</h5>
                                                    <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="license">
                                                        <h5 className="card-text " >라이센스</h5>
                                                        <div className="d-grid">
                                                            <Button className="btn btn-secondary   mt-1 ml-1 mb-1 mr-1" size="sm"  disabled>
                                                                &nbsp;<FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy/>&nbsp;<FaCreativeCommonsNc/>&nbsp;
                                                                <FaCreativeCommonsSa/>&nbsp;<FaCreativeCommonsNd/>
                                                                <br/>&nbsp;&nbsp;CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND
                                                            </Button>{' '}
                                                        </div>
                                                        </div>
                                                    <hr/>
                                                        <span> 대회, 진행단계가 있는  경우 나타남 </span>
                                                        <h5 className="card-text col-12">대회배지
                                                        <img className="mt-1 ml-1 mb-1 mr-1 badge_Img" src="ba.png" alt=""/></h5>
                                                        <h5 className="card-text col-12">진행단계<Step/></h5>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-center ">
                                                    <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart size="15px"/><span>15</span></Button>{' '}
                                                    <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown size="15px"/><span>10</span></Button>{' '}
                                                    <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">자세히<MdOutlineAddBox size="15px"/></Button>{' '}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Like" title="좋아요순"  tabClassName="h6">
                                </Tab>
                                <Tab eventKey="contact" title="기타" tabClassName="h6" disabled>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    {/*Code 부분*/}
                    <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="h3 text-right">Code</div>
                        <div className="code-tab">
                            <Tabs defaultActiveKey="new" id="code-tab" >
                                <Tab eventKey="new" title="최신순" tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12">
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
                                                                <Button href="./Codedetail" className="btn btn-primary" size="sm"><MdOutlineAddBox/><br/>자세히</Button>{' '}
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
                                        <div className="col-md-6 col-xs-12">
                                            <div className="card" >
                                                    <img className="card-img"  src="cat.jpg" alt=""/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">title</h5>
                                                        <p className="card-text">요약 내용</p>
                                                        <hr/>
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <Step/><br/>
                                                        <Step2/>
                                                    </div>
                                                    <div className="card-footer d-grid ">
                                                        <Button href="./Codedetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">자세히<MdOutlineAddBox/></Button>{' '}
                                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/>15</Button>{' '}
                                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/>15</Button>{' '}
                                                        <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/>  <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> <br/>CC BY NC SA ND </Button>{' '}
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Down" title="다운로드순" tabClassName="h6">
                                    <div className="card-body text-center">다운로드가 가장 많은 부분</div>
                                </Tab>
                                <Tab eventKey="Like" title="좋아요순"  tabClassName="h6">
                                    <div className="card-body text-center">좋아요가 가장 많은 부분</div>
                                </Tab>
                                <Tab eventKey="contact" title="기타" tabClassName="h6" disabled>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
    </div>
    )
}

export default Main;