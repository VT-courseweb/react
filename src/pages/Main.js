import Card from "react-bootstrap/Card";

function Main(){
    return (
        <div >
            <h1>mainpage</h1>
            <br/>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-body text-center"> 사이트 소개 부분</div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-body text-center"> 이미지나 영상 부분</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card mb-4">
                        <div class="card-header text-center"> Datasetes 부분</div>
                        <div class="card-body text-center">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> hot Datasetes 부분</div>
                                        <div class="card-body text-center">hot Datasetes 부분</div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card mb-6">
                                        <div class="card-header text-center"> new Datasetes 부분</div>
                                        <div class="card-body text-center">new Datasetes 부분</div>
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