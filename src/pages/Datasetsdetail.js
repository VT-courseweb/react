import "../index.css"

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup'

//import {AiFillFileImage} from 'react-icons/ai';         // 그림 리스트부분 아이콘 
import {AiOutlineDatabase} from 'react-icons/ai';       // card헤더 데이터아이콘

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

import Step from './Step';
import Step2 from './Step2';

function Datasetsdetail (){
    return (
        <div>
            <div className="Datasetsdetail">
                {/* <h1>Datasetespage</h1> */}
                <Form className="col-12" >
                    <div className="row">
                        <div className="col-2"><span>진행 단계 디자인 선택요망</span></div>
                        <div className="col-5">
                            <Step />
                        </div>
                        <div className="col-5">
                            <Step2/>
                        </div>
                    </div>
                    <br/>
                    <FormControl  type="Text"  placeholder="title" className = " col-xl-12 my-lg-0 mt-1 mb-1 ml-1 mr-1" aria-label="Title" size="lg" readOnly />
                    <Button className="btn btn-secondary mt-1 ml-1 mb-1 mr-1 col-12 " disabled>
                        <FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy size="20px"/>&nbsp;<FaCreativeCommonsNc size="20px"/>
                        &nbsp;<FaCreativeCommonsSa size="20px"/>&nbsp;<FaCreativeCommonsNd size="20px"/>&nbsp;&nbsp;
                        <br/>CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND&nbsp;&nbsp;
                    </Button>
                    <InputGroup size="sm" className="mt-1 mb-1 ml-1 mr-1">
                        <FormControl placeholder="파일정보 EX) 파일명.PPT" aria-label="Small" aria-describedby="inputGroup-sizing-sm" readOnly />
                        <Button className="btn btn-secondary">다운로드</Button>
                    </InputGroup>
                    <br/>
                    <FormControl  type="Text"  placeholder="Description" className = " col-xl-12 mt-1 mb-1 ml-1 mr-1" aria-label="Title" size="lg" readOnly /> 
                </Form>
                <br/>
                <div className="col-xl-12 mt-1 mb-1 ml-1 mr-1 " >
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