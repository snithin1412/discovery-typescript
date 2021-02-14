import React from 'react';
import './style.css';
import Text from '../text/Text';

interface Props {
    inputStyle?: string;
    placeHolder: string;
}

const InputText: React.FC<Props> = ({inputStyle, placeHolder}) => {
    return (
        <React.Fragment>
            <input className={inputStyle} autoComplete="off" type="text" 
            placeholder={placeHolder}/>
            <Text content="&#128269;" type="search-icon"/>
        </React.Fragment>
    );
};

export default InputText;