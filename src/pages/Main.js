import Carousel from 'react-bootstrap/Carousel';
 //import { Accordion, Col, FormGroup, Row } from "react-bootstrap";
function Main(){
    return (
        <div>
            <h1>mainpage</h1>
            <br/>
            <Carousel variant="info">{/*variant="dark"*/}
                <Carousel.Item >
                    <img className="d-block w-100" src="field.jpg" alt="First slide" style={{height: "600px"}} />
                    {/* <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img className="d-block w-100" src="cat.jpg" alt="Third slide" style={{height: "600px"}} />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card mb-4">
                        <div class="card-body text-center"> 사이트 소개 부분</div>
                        <p class="text-center">Kkgle이란 사이트는 OOO을 위한 사이트로 OOO을 대상으로 하여<br/> OOO을 하고 OOOOOOOOOO울 하는 OOOOOOO한 사이트 이다.</p>
                    </div>
                </div>
                {/* <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-body text-center"> 이미지나 영상 부분</div>
                        <img className="visualterminology_logo" src="visualterminology_logo.png"  alt="visualterminology_logo"/>
                    </div>
                </div> */}
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card border-dark mb-4">
                    <div class="card-header">Datasetes 부분</div>
                        <div class="card-body text-center">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> 다운로드가 가장 많은 부분</div>
                                        <div class="card-body text-center">다운로드가 가장 많은 부분</div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> 좋아요가 가장 많은 부분</div>
                                        <div class="card-body text-center">좋아요가 가장 많은 부분</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col-xl-6">
                    <div class="card border-dark mb-4">
                        <div class="card-header text-center"> Code 부분</div>
                        <div class="card-body text-center">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> 다운로드가 가장 많은 Code</div>
                                        <div class="card-body text-center">다운로드가 가장 많은 Code</div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> 좋아요가 가장 많은 Code</div>
                                        <div class="card-body text-center"> 좋아요가 가장 많은 Code</div>
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