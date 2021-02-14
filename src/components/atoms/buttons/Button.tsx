import React from 'react';
import './style.css';
import Text from '../text/Text';



interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    btnName: string;
    btnColor?: string;
    type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({btnName, btnColor, ...props}) => {
    return (
        <button className={ `btn ${btnColor}`} {...props}>
            <Text content={btnName}/>
        </button>
    )
};

export default Button;