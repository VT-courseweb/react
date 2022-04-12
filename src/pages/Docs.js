import Button from 'react-bootstrap/Button';
import React from 'react';
import { Popover } from 'react-tiny-popover'
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
                
            </div>
        </div>
    );
}

export default Docs;