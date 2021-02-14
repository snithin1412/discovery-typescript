import React from 'react';
import Header from '../organisms/header/Header';
import Carousel from '../organisms/Carousel/Carousel';
import Category from '../organisms/Category/Category';
import { Props } from './type';


const Template: React.FC<Props> = ({headerData, carouselData, categoryData}) => {
    return (
        <div>
            <Header content={headerData}/>
            <Carousel content={carouselData}/>
            <Category content={categoryData}/>
        </div>
    );
};

export default Template;