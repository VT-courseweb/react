import React from 'react'
import Button from 'react-bootstrap/Button';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineFork} from 'react-icons/ai';   
import {MdOutlineAddBox} from 'react-icons/md'; 


function Datasetes(){
     
    return (
        <div>
            <div class="container">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <img src="cat_2.jpg" style={{maxHeight:"300px",maxWidth:"450px"}} class="card-img"/>
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title">Lorem</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.</p>
                            </div>
                        </div>
                    </div>
                        <div>
                            <div class="card-footer">
                                <Button href="/Datasetesdetail" class="btn btn-primary"><MdOutlineAddBox/>More</Button>{' '}
                                <Button className="btn btn-secondary">라이센스 여부</Button>{' '}
                                <Button className="btn btn-danger"  tabindex="0"> <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                <Button className="btn btn-primary"  tabindex="0"><AiOutlineFork/> Fork <span>2,048</span></Button>
                            </div>
                        </div>
                    
                </div>
                <br/>
                <div class="col-6">
                    <div class="card" >
                        <img src="cat_2.jpg"  class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Lorem</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.</p>
                            </div>
                            <div>
                            <div class="card-footer">
                                <Button href="/Datasetesdetail" class="btn btn-primary"><MdOutlineAddBox/>More</Button>{' '}
                                <Button className="btn btn-secondary">라이센스 여부</Button>{' '}
                                <Button className="btn btn-danger"  tabindex="0"> <AiFillHeart/>Like <span>2,048</span></Button>{' '}
                                <Button className="btn btn-primary"  tabindex="0"><AiOutlineFork/> Fork <span>2,048</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
    export default Datasetes;