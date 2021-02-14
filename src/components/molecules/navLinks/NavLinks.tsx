import React from 'react';
import Link from '../../atoms/link/Link';
import './style.css';

interface Props {
    content: string[];
}

const NavLinks: React.FC<Props> = ({content}) => {
    return (
        <div className="nav-links">
            {content.map((linkName: string, index: number) => {
                return (
                <Link name={linkName} location="/" active={index === 0 ? "text-link-active" : "text-link"} key={index}/>
                )
            })}
        </div>
    );
};

export default NavLinks;