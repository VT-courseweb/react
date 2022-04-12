import Carousel from 'react-bootstrap/Carousel';
//import { Accordion, Col, FormGroup, Row } from "react-bootstrap";
import "../index.css"
function Main(){
    return (
        <div>
            <div className="Main">
            <h1>mainpage</h1>
            <br/>
            <Carousel variant="info">{/*variant="dark"*/}
                <Carousel.Item >
                    <img className="d-block w-100" src="field.jpg" alt="First slide" style={{height: "400px"}} />
                    {/* <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img className="d-block w-100" src="cat.jpg" alt="Third slide" style={{height: "400px"}} />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card mb-4">
                        <div className="card-body text-center"> 사이트 소개 부분</div>
                        <p className="text-center">Kkgle이란 사이트는 OOO을 위한 사이트로 OOO을 대상으로 하여<br/> OOO을 하고 OOOOOOOOOO울 하는 OOOOOOO한 사이트 이다.</p>
                    </div>
                </div>
                {/* <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-body text-center"> 이미지나 영상 부분</div>
                        <img className="visualterminology_logo" src="visualterminology_logo.png"  alt="visualterminology_logo"/>
                    </div>
                </div> */}
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card border-dark mb-4">
                    <div className="card-header">Datasetes 부분</div>
                        <div className="card-body text-center">
                            <div className="row">
                                <div className="col-xl-6 mb-1 mt-1 ml-1 mr-1">
                                    <div className="card mb-6">
                                        <div className="card-header text-center"> 다운로드가 가장 많은 부분</div>
                                        <div className="card-body text-center">다운로드가 가장 많은 부분</div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mb-1 mt-1 ml-1 mr-1">
                                    <div className="card mb-6">
                                        <div className="card-header text-center "> 좋아요가 가장 많은 부분</div>
                                        <div className="card-body text-center">좋아요가 가장 많은 부분</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-xl-6">
                    <div className="card border-dark mb-4">
                        <div className="card-header text-center"> Code 부분</div>
                        <div className="card-body text-center">
                            <div className="row">
                                <div className="col-xl-6 mb-1 mt-1 ml-1 mr-1">
                                    <div className="card mb-6">
                                        <div className="card-header text-center"> 다운로드가 가장 많은 Code</div>
                                        <div className="card-body text-center">다운로드가 가장 많은 Code</div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mb-1 mt-1 ml-1 mr-1">
                                    <div className="card mb-6">
                                        <div className="card-header text-center"> 좋아요가 가장 많은 Code</div>
                                        <div className="card-body text-center"> 좋아요가 가장 많은 Code</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main