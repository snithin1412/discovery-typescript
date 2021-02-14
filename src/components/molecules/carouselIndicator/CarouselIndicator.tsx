import React from 'react';
import Link from '../../atoms/link/Link';

interface Props {
    type: string;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
}

const CarouselIndicator: React.FC<Props> = ({type, onClick}) => {
    return (
        <Link location="/" onClick={onClick} className={type} name="" />
    );
};

export default CarouselIndicator;