import React from 'react'
import Button from 'react-bootstrap/Button';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineFork} from 'react-icons/ai';   
import {MdOutlineAddBox} from 'react-icons/md'; 

function Datasetes(){
     
    return (
        <div>
            <div className="Container">
                <div className="card" >
                    <div className="col-12">
                        <div className='row'>
                            <div className="col-6">
                                <img src="cat_2.jpg" className="card-img" alt=""  ></img>
                            </div>
                            <div className="col-6">
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
                            <Button href="/Datasetesdetail" className="btn btn-primary">More<MdOutlineAddBox/></Button>{' '}
                            <Button className="btn btn-secondary">라이센스 여부</Button>{' '}
                            <Button className="btn btn-danger" > <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                            <Button className="btn btn-primary" ><AiOutlineFork/> Fork <span>2,048</span></Button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="col-5">
                    <div className="card" >
                        <img src="cat_2.jpg"  className="card-img-top" alt=""/>
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
                            <div>
                            <div className="card-footer">
                                <Button href="/Datasetesdetail" className="btn btn-primary ml-1 mr-1 mb-1 ">More<MdOutlineAddBox/></Button>{' '}
                                <Button className="btn btn-secondary ml-1 mr-1 mb-1">라이센스 여부</Button>{' '}
                                <Button className="btn btn-danger ml-1 mr-1 mb-1"> <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                <Button className="btn btn-primary ml-1 mr-1 mb-1"  ><AiOutlineFork/> Fork <span>2,048</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
    export default Datasetes;