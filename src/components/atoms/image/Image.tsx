import React from 'react';
import './style.css';

interface Props {
    location: string;
    width?: number;
    height?: number;
    alt?: string;
    className?: string
}

const Image: React.FC<Props> = ({location, width, height, alt, className}) => {
    return (
        <img className={className}  src={location} width={width} height={height} alt={alt}/>
    );
};

export default Image;