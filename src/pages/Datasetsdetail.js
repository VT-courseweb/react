import "../index.css"
import './Upload.css';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import {AiFillFileImage} from 'react-icons/ai';         // 그림 리스트부분 아이콘 
import {AiOutlineDatabase} from 'react-icons/ai';       // card헤더 데이터아이콘

/*라이센스 아이콘*/
import {FaCreativeCommons} from 'react-icons/fa';   // cc아이콘         -> CC
import {FaCreativeCommonsBy} from 'react-icons/fa'; // 사람아이콘       -> BY
import {FaCreativeCommonsNc} from 'react-icons/fa'; // 달러 금지 아이콘 -> NC
import {FaCreativeCommonsSa} from 'react-icons/fa'; // 뒤로 회전 아이콘 -> SA 
import {FaCreativeCommonsNd} from 'react-icons/fa'; // 같다(=)아이콘    -> ND

function Datasetsdetail (){
    return (
        <div>
            <div className="Datasetsdetail">
                <h1>Datasetespage</h1>
                <Form className="col-xl-12" style={{minWidth:"250px"}}>
                    <FormControl  type="Text"  placeholder="title" className=" col-xl-12 my-lg-0 mt-1 mb-1 ml-1 mr-1" aria-label="Title" />
                    <div className="alert alert-danger mt-1 mb-1 ml-1 mr-1">
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/> CC,BY     저작자 표시 </p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/> CC,BY,NC    저작자 표시- 비영리</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNd/> CC,BY,ND     저작자 표시- 변경금지</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsSa/> CC,BY,SA      저작자 표시- 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsSa/> CC,BY,NC,SA  저작자 표시- 비영리 - 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsNd/> CC,BY,NC,ND   저작자 표시- 비영리 - 변경금지</p>
                    </div>
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