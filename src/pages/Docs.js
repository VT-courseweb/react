import Button from 'react-bootstrap/Button';
import React from 'react';
import "../index.css"
function Docs(){
    


    return (
        <div>
            <div className="Docs_btn">
                <h1>Docspage</h1>
                <br/>

                <Button className="btn btn-secondary">사용법</Button>{' '}
                <Button className="btn btn-secondary">등급</Button>{' '}
                <Button className="btn btn-secondary">사이트의 각종설명 </Button>{' '}
                <Button className="btn btn-secondary" >라이센스 여부설명 </Button>{' '}
                <div className="alert alert-secondary mt-3 mb-3" role="alert"> 관련 내용이 뜨는 부분</div>
                {/* <div className="alert alert-danger mt-1 mb-1 ml-1 mr-1">
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/> CC,BY     저작자 표시 </p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/> CC,BY,NC    저작자 표시- 비영리</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNd/> CC,BY,ND     저작자 표시- 변경금지</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsSa/> CC,BY,SA      저작자 표시- 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsSa/> CC,BY,NC,SA  저작자 표시- 비영리 - 동일조건변경허락</p>
                        <p><FaCreativeCommons size="25px"/><FaCreativeCommonsBy/><FaCreativeCommonsNc/><FaCreativeCommonsNd/> CC,BY,NC,ND   저작자 표시- 비영리 - 변경금지</p>
                    </div>
                    <br/> */}
            </div>
        </div>
    );
}

export default Docs;