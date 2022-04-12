import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {AiOutlineDatabase} from 'react-icons/ai';   
import {AiFillFileImage} from 'react-icons/ai';
import "../index.css"
import './Upload.css';

function Datasetsdetail (){
    return (
        <div>
            <div className="Datasetsdetail">
                <h1>Datasetespage</h1>
                <Form className="col-xl-12" style={{minWidth:"250px"}}>
                    <FormControl  type="Text"  placeholder="title" className=" col-xl-12 my-lg-0 mt-2 mb-2" aria-label="Title" />
                    <FormControl type="Text"  placeholder="라이센스 여부 표시" className=" col-xl-12 mt-2 mb-2" />
                    <Button className="btn btn-secondary mt-2 mb-2" style={{float:'right'}}>다운로드</Button>{' '}
                    <div class="Downlod-box mt-2 mb-2">
                        <div id="show-file" class="show-file">
                            <AiFillFileImage/>
                            <p class="message">file 리스트 나오는 부분</p>
                            <p>박스 부분만 만들어 둠, 기능 작동 X</p>
                        </div>
                    </div>
                
                </Form>
                <br/>
                <div className="col-xl-12 mt-2 mb-2 " style={{minWidth:"250px"}}  >
                    <h5>데이터explorer부분</h5>
                    <div className="card">
                        <div className="card-header">
                            <AiOutlineDatabase/> DataTable Example <span><font color='red'>이 부분에 들어간 내용회의필요 </font></span>
                        </div>
                        <div className="card-body d-none d-lg-table-cell">
                            <Table striped bordered hover >
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
}
    export default Datasetsdetail