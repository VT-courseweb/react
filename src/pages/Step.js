import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';



import {FcNext} from 'react-icons/fc'; // 단계 표시(화살표)아이콘




function Step(){

    const [value, setValue] = useState([1, 3]);
    const ButtonChange = (val) => setValue(val);
    
    return (
        <div>
            <ButtonGroup type="radio" value={value} onChange={ButtonChange} size="sm" fontSize="5px" className="col-lg-12 col-md-6 col-sm-3 col-xs-hidden">
                 {/* className="col-lg-12 col-md-6 col-sm-3 col-xs-hidden"  */}
                <Button id="btn btn-1" value={1} ><span> 접수대기</span> </Button>
                <FcNext size="51px"/>
                <Button id="btn btn-2" value={2} ><span> 접수완료</span> </Button>
                <FcNext size="51px"/>
                <Button id="btn btn-3" value={3} ><span> 심사중.. </span> </Button>
                <FcNext size="51px"/>
                <Button id="btn btn-4" value={4} ><span> 심사완료</span></Button>
            </ButtonGroup>
        </div>
    )
}export default Step;