import React from 'react';
import './style.css';
import Text from '../text/Text'

interface Props {
    location: string;
    name: string | React.ReactNode;
    active?: string;
    className?: string;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
}

const Link: React.FC<Props> = ({location, name, active, className, onClick}) => {
    return (
        <a className={`link ${className}`} href={location} onClick={onClick}><Text content={name} type={active}/></a>
    );
};

export default Link;