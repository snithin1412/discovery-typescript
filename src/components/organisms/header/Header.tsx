import React from 'react';
import Logo from '../../molecules/logo/Logo';
import NavLinks from '../../molecules/navLinks/NavLinks';
import Search from '../../molecules/search/Search';
import './style.css';

interface Props {
    content: {
        logo: {list: string; listAlt: string; logo: string; logoAlt: string;};
        nav: string[];
        search: {placeHolder: string; button: string;};
    }
}

const header: React.FC<Props> = ({content}) => {
    return (
        <div className="header">
            <Logo content={content.logo}/>
            <NavLinks content={content.nav}/>
            <Search content={content.search}/>
        </div>
    );
};


export default header;