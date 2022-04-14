import "../index.css"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import {AiFillHeart} from 'react-icons/ai';         //하트 아이콘
import {MdOutlineAddBox} from 'react-icons/md';     //더하기(+) 아이콘
import {AiOutlineArrowDown} from 'react-icons/ai';  //다운로드 아이콘
import {FcNext} from 'react-icons/fc'; // 단계 표시(화살표)아이콘

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


function Main(){

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
            <div className="Main">
                {/* <h1>mainpage</h1>
                <br/> */}
                {/*사진 이미지 부분*/}
                <Carousel variant="info">{/*variant="dark"*/}
                    <Carousel.Item >
                        <img className="d-block  Main_Img" src="cat_2.jpg" alt="First slide"/>
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
                <div className="col-xl-12">
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
                    <div className="col-6">
                        <div className="h3 text-right">Datasets</div>
                        <div className="datasets-tab">
                            <Tabs defaultActiveKey="new" id="datasets-tab" >
                                <Tab eventKey="new" title="최신순" tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-6">
                                                <div className="card" >
                                                        <img className="card-img"  src="cat.jpg" alt=""/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">title</h5>
                                                            <p className="card-text">요약 내용</p>
                                                            <hr/>
                                                            <h6 className="card-text" >생성자</h6>
                                                            <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                            <hr/>
                                                            <ButtonGroup type="radio" value={value} onChange={ButtonChange}>
                                                                <Button id="btn btn-1" size="sm" value={1} ><span> 접수대기</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-2" size="sm" value={2} ><span> 접수완료</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-3" size="sm" value={3} ><span> 심사중.. </span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-4" size="sm" value={4} ><span> 심사완료</span></Button>
                                                            </ButtonGroup>
                                                        </div>
                                                        <div className="card-footer d-grid ">
                                                            <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                                            <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/>  <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> <br/>CC BY NC SA ND </Button>{' '}
                                                            <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                                            <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>
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
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <ButtonGroup >
                                                            {stepChange.map((radio, idx) => (
                                                            <ToggleButton
                                                                size="sm"
                                                                key={idx}
                                                                id={`radio-${idx}`}
                                                                type="radio"
                                                                variant="outline-primary"
                                                                name="radio"
                                                                value={radio.value}
                                                                checked={stepValue === radio.value}
                                                                onChange={(e) => setStepValue(e.currentTarget.value)}
                                                                >{radio.name}
                                                            </ToggleButton>
                                                            ))}
                                                        </ButtonGroup>
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
                                    </div>
                                </Tab>
                                <Tab eventKey="Down" title="다운로드순" tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-6">
                                                <div className="card" >
                                                        <img className="card-img"  src="cat.jpg" alt=""/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">title</h5>
                                                            <p className="card-text">요약 내용</p>
                                                            <hr/>
                                                            <h6 className="card-text" >생성자</h6>
                                                            <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                            <hr/>
                                                            <ButtonGroup type="radio" value={value} onChange={ButtonChange}>
                                                                <Button id="btn btn-1" size="sm" value={1} ><span> 접수대기</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-2" size="sm" value={2} ><span> 접수완료</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-3" size="sm" value={3} ><span> 심사중.. </span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-4" size="sm" value={4} ><span> 심사완료</span></Button>
                                                            </ButtonGroup>
                                                        </div>
                                                        <div className="card-footer d-grid ">
                                                            <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                                            <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/> <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/><br/>CC BY {/*NC SA ND*/}  </Button>{' '}
                                                            <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                                            <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>
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
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <ButtonGroup >
                                                            {stepChange.map((radio, idx) => (
                                                            <ToggleButton
                                                                size="sm"
                                                                key={idx}
                                                                id={`radio-${idx}`}
                                                                type="radio"
                                                                variant="outline-primary"
                                                                name="radio"
                                                                value={radio.value}
                                                                checked={stepValue === radio.value}
                                                                onChange={(e) => setStepValue(e.currentTarget.value)}
                                                                >{radio.name}
                                                            </ToggleButton>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                    <div className="card-footer text-center">
                                                        <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<br/><MdOutlineAddBox size="15px"/></Button>{' '}
                                                        <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="15px"/> <FaCreativeCommonsBy/> {/* <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> */}<br/>CC BY {/*NC SA ND*/}  </Button>{' '}
                                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<br/><AiFillHeart size="15px"/></Button>{' '}
                                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<br/><AiOutlineArrowDown size="15px"/></Button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Like" title="좋아요순"  tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-6">
                                                <div className="card" >
                                                        <img className="card-img"  src="cat.jpg" alt=""/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">title</h5>
                                                            <p className="card-text">요약 내용</p>
                                                            <hr/>
                                                            <h6 className="card-text" >생성자</h6>
                                                            <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                            <hr/>
                                                            <ButtonGroup type="radio" value={value} onChange={ButtonChange}>
                                                                <Button id="btn btn-1" size="sm" value={1} ><span> 접수대기</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-2" size="sm" value={2} ><span> 접수완료</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-3" size="sm" value={3} ><span> 심사중.. </span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-4" size="sm" value={4} ><span> 심사완료</span></Button>
                                                            </ButtonGroup>
                                                        </div>
                                                        <div className="card-footer d-grid ">
                                                            <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                                            <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="25px"/> <FaCreativeCommonsBy/> {/* <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> */}<br/>CC BY {/*NC SA ND*/}  </Button>{' '}
                                                            <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                                            <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>
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
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <ButtonGroup >
                                                            {stepChange.map((radio, idx) => (
                                                            <ToggleButton
                                                                size="sm"
                                                                key={idx}
                                                                id={`radio-${idx}`}
                                                                type="radio"
                                                                variant="outline-primary"
                                                                name="radio"
                                                                value={radio.value}
                                                                checked={stepValue === radio.value}
                                                                onChange={(e) => setStepValue(e.currentTarget.value)}
                                                                >{radio.name}
                                                            </ToggleButton>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                    <div className="card-footer text-center">
                                                        <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<br/><MdOutlineAddBox size="15px"/></Button>{' '}
                                                        <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1" size="sm" disabled><FaCreativeCommons size="15px"/> <FaCreativeCommonsBy/> {/* <FaCreativeCommonsNc/> <FaCreativeCommonsSa/> <FaCreativeCommonsNd/> */}<br/>CC BY {/*NC SA ND*/}  </Button>{' '}
                                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<br/><AiFillHeart size="15px"/></Button>{' '}
                                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<br/><AiOutlineArrowDown size="15px"/></Button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="기타" tabClassName="h6" disabled>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    {/*Code 부분*/}
                    <div className="col-6">
                        <div className="h3 text-right">Code</div>
                        <div className="code-tab">
                            <Tabs defaultActiveKey="new" id="code-tab" >
                                <Tab eventKey="new" title="최신순" tabClassName="h6">
                                    <br/>
                                    <div className="row">
                                        <div className="col-6">
                                                <div className="card" >
                                                        <img className="card-img"  src="cat.jpg" alt=""/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">title</h5>
                                                            <p className="card-text">요약 내용</p>
                                                            <hr/>
                                                            <h6 className="card-text" >생성자</h6>
                                                            <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                            <hr/>
                                                            <ButtonGroup type="radio" value={value} onChange={ButtonChange}>
                                                                <Button id="btn btn-1" size="sm" value={1} ><span> 접수대기</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-2" size="sm" value={2} ><span> 접수완료</span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-3" size="sm" value={3} ><span> 심사중.. </span> </Button>
                                                                <FcNext size="51px"/>
                                                                <Button id="btn btn-4" size="sm" value={4} ><span> 심사완료</span></Button>
                                                            </ButtonGroup>
                                                        </div>
                                                        <div className="card-footer">
                                                            <ButtonGroup className="mt-1 mb-1 mr-1 ml-1">
                                                                <Button href="./Datasetsdetail" className="btn btn-primary" size="sm"><MdOutlineAddBox/><br/>더보기</Button>{' '}
                                                                <Button className="btn btn-danger" size="sm"><AiFillHeart/><br/>좋아요</Button>{' '}
                                                                <Button className="btn btn-info" size="sm"><AiOutlineArrowDown/><br/>다운로드</Button>{' '}
                                                                <Button className="btn btn-secondary" size="sm" hei disabled> <FaCreativeCommons size="15px"/> <FaCreativeCommonsBy/> <FaCreativeCommonsNc/> <FaCreativeCommonsSa/>{/*<FaCreativeCommonsNd/> */}<br/>CC BY NC SA{/*ND*/}</Button>
                                                            </ButtonGroup>
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
                                                        <h6 className="card-text" >생성자</h6>
                                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                                        <hr/>
                                                        <ButtonGroup >
                                                            {stepChange.map((radio, idx) => (
                                                            <ToggleButton
                                                                size="sm"
                                                                key={idx}
                                                                id={`radio-${idx}`}
                                                                type="radio"
                                                                variant="outline-primary"
                                                                name="radio"
                                                                value={radio.value}
                                                                checked={stepValue === radio.value}
                                                                onChange={(e) => setStepValue(e.currentTarget.value)}
                                                                >{radio.name}
                                                            </ToggleButton>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                    <div className="card-footer d-grid ">
                                                        <Button href="./Datasetsdetail" className="btn btn-primary mt-1 ml-1 mb-1 mr-1" size="sm">더보기<MdOutlineAddBox/></Button>{' '}
                                                        <Button className="btn btn-danger mt-1 ml-1 mb-1 mr-1" size="sm">좋아요<AiFillHeart/></Button>{' '}
                                                        <Button className="btn btn-info mt-1 ml-1 mb-1 mr-1" size="sm">다운로드<AiOutlineArrowDown/></Button>{' '}
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