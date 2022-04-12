import React from 'react'
import Button from 'react-bootstrap/Button';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineFork} from 'react-icons/ai';   
import {MdOutlineAddBox} from 'react-icons/md'; 
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {BsSearch} from 'react-icons/bs';

function Code(){
     
    return (
        <div>
            <div className="Container">
                <div class="row">
                    <div class="col-md-1 col-xs-1 sidebar">
                        <ul class="nav nav-sidebar">
                            <li>
                                <Form className="d-flex">
                                    <FormControl type="search"   placeholder="Search" aria-label="Search" ></FormControl>
                                    <Button variant="primary" ><BsSearch/></Button>
                                </Form>
                            </li>
                            <span><font color='red'>이 부분에 들어간 내용회의필요 </font></span>
                            <li class="active"><a href="#">최근일</a></li>
                            <li><a href="#">조회순</a></li>
                            <li><a href="#">다운로드순 </a></li>
                            <li><a href="#">Reward</a></li>
                        </ul>
                    
                    </div>
                </div>
                {/*card 형태 부분*/}
                <div className="card_mian">
                    {/* 가로card*/}
                    <div className="card col-7">
                        {/* card body 내용(col은 7을 1로 생각해서  12 로 나눈다고 생각)*/}
                            <div className='row no-gutters'>
                                <div className="col-5">
                                    <img className="d-block"  src="cat_2.jpg" alt="Third slide" style={{height: "100%" ,width:"100%"}} />
                                </div>
                                <div className="col-7">
                                    <div className="card-body">
                                        <h5 className="card-title">title</h5>
                                        <p className="card-text">요약 내용</p>
                                        <hr/>
                                        <h6 className="card-text" >생성자</h6>
                                        <h6 className="card-text" >생성일자 및 등록일자</h6>
                                        <hr/>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "45%"}}>
                                                <span className="sr-only">45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-footer">
                                <Button href="./Codedetail" className="btn btn-primary">More<MdOutlineAddBox/></Button>{' '}
                                <Button className="btn btn-secondary">라이센스 여부</Button>{' '}
                                <Button className="btn btn-danger" > <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                <Button className="btn btn-primary" ><AiOutlineFork/> Fork <span>2,048</span></Button>
                            </div>
                    </div>
                    <br/>
                    {/* 세로card*/}
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
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "45%"}}>
                                                <span className="sr-only">45%</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="card-footer">
                                    <Button href="./Codedetail" className="btn btn-primary ml-1 mr-1 mb-1 ">More<MdOutlineAddBox/></Button>{' '}
                                    <Button className="btn btn-secondary ml-1 mr-1 mb-1">라이센스 여부</Button>{' '}
                                    <Button className="btn btn-danger ml-1 mr-1 mb-1"> <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                    <Button className="btn btn-primary ml-1 mr-1 mb-1"  ><AiOutlineFork/> Fork <span>2,048</span></Button>
                                </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}
    export default Code;