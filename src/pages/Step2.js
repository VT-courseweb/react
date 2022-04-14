import React, { useState } from 'react';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Step2(){

    
    const [stepValue, setStepValue] = useState('1');
    const stepChange = [
        { name: '접수대기', value: '1' },
        { name: '접수완료', value: '2' },
        { name: '심사중..', value: '3' },
        { name: '심사완료', value: '4' },
      ]

    return (
    <div>
        <ButtonGroup>
            {stepChange.map((radio, idx) => (
            <ToggleButton
                size="sm"
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-primary"
                name="radio"
                value={radio.value}
                checked={stepValue === radio.value}
                onChange={(e) => setStepValue(e.currentTarget.value)}
            >{radio.name}
            </ToggleButton>))}
        </ButtonGroup>
    </div>
    )
}export default Step2;