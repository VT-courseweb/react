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
                            <div className="col-4">
                                <img src="cat_2.jpg" style={{maxHeight:"250px", maxWidth:"250px"}} alt="" ></img>
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <h5 className="card-title">Lorem</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.</p>
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
                <div className="col-6">
                    <div className="card" >
                        <img src="cat_2.jpg"  className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Lorem</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.</p>
                            </div>
                            <div>
                            <div className="card-footer">
                                <Button href="/Datasetesdetail" className="btn btn-primary">More<MdOutlineAddBox/></Button>{' '}
                                <Button className="btn btn-secondary">라이센스 여부</Button>{' '}
                                <Button className="btn btn-danger"> <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                <Button className="btn btn-primary"  ><AiOutlineFork/> Fork <span>2,048</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
    export default Datasetes;