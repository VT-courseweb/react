import React from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "../index.css"

/*라이센스 아이콘*/
import {FaCreativeCommons} from 'react-icons/fa';   // cc아이콘         -> CC
import {FaCreativeCommonsBy} from 'react-icons/fa'; // 사람아이콘       -> BY
import {FaCreativeCommonsNc} from 'react-icons/fa'; // 달러 금지 아이콘 -> NC
import {FaCreativeCommonsSa} from 'react-icons/fa'; // 뒤로 회전 아이콘 -> SA 
import {FaCreativeCommonsNd} from 'react-icons/fa'; // 같다(=)아이콘    -> ND

function Docs(){
    
    return (
        <div>
            <div className="Docs_btn">
                <h1>Docspage</h1>
                <br/>
                <Tabs defaultActiveKey="license" id="datasets-tab" >
                    <Tab eventKey="use" title="사용법" tabClassName="h6 "></Tab>
                    <Tab eventKey="ranking" title="등급" tabClassName="h6"></Tab>
                    <Tab eventKey="new" title="사이트의 각종설명" tabClassName="h6"></Tab>
                    <Tab eventKey="license" title="라이센스 여부설명" tabClassName="h6">
                    <div className="alert alert-secondary mt-1 mb-1 ml-1 mr-1">
                        <p>라이센스 표시 예시&nbsp;
                        <Button className="btn btn-secondary  mt-1 ml-1 mb-1 mr-1" size="sm"  disabled>
                            &nbsp;<FaCreativeCommons size="25px"/>&nbsp;<FaCreativeCommonsBy/>&nbsp;<FaCreativeCommonsNc/>&nbsp;
                            <FaCreativeCommonsSa/>&nbsp;<FaCreativeCommonsNd/>
                            <br/>&nbsp;&nbsp;CC&nbsp;BY&nbsp;NC&nbsp;SA&nbsp;ND  
                        </Button></p>
                        <h4>※&nbsp;라이센스 표기 설명 &nbsp;</h4>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/> CC,BY     저작자 표시 </p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/> CC,BY,NC    저작자 표시- 비영리</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNd/> CC,BY,ND     저작자 표시- 변경금지</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsSa/> CC,BY,SA      저작자 표시- 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsSa/> CC,BY,NC,SA  저작자 표시- 비영리 - 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsNd/> CC,BY,NC,ND   저작자 표시- 비영리 - 변경금지</p>
                    </div>
                    </Tab>
                    <Tab eventKey="detail" title="관련 내용이 뜨는 부분" tabClassName="h6"></Tab>
                    <Tab eventKey="contact" title="기타" tabClassName="h6" disabled></Tab>

                </Tabs>
            </div>
        </div>
    );
}

export default Docs;