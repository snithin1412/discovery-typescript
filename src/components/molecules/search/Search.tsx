import React from 'react';
import InputText from '../../atoms/input-text/InputText';
import Button from '../../atoms/buttons/Button';
import './style.css';

interface Props {
    content: {
        placeHolder: string;
        button: string;
    }
}

const Search: React.FC<Props> = ({content}) => {
    return (
        <div className="search">
            <InputText inputStyle="search-input" placeHolder={content.placeHolder}/>
            <Button btnName={content.button} btnColor="primary" type="submit" />
        </div>
    );
};

export default Search;