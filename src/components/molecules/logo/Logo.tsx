import React from 'react';
import Image from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';
import './style.css';

interface Props {
    content: {
        list: string;
        listAlt: string;
        logo: string;
        logoAlt: string;
    }
}

const Logo: React.FC<Props> = ({content}) => {
    return (
        <div className="logo">
            <Image location={content.list} alt={content.listAlt} width={24} className="pd-img"/>
            <Link name={<Image location={content.logo} alt={content.logoAlt} width={190}/>} location="/" active="text-link-active"/>
        </div>
    );
};

export default Logo;