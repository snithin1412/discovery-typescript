import React from 'react';
import Image from '../../atoms/image/Image';
import Text from '../../atoms/text/Text';
import './style.css';

interface Props {
    image: string;
    content: string;
}

const CategoryCard: React.FC<Props> = ({image, content}) => {
    return (
        <div className="category-card">
            <Image className="border-rad-10" location={image} width={202} height={125}/>
            <div className="category-text-position"><Text content={content} type="category-text" /></div>
            
        </div>
    );
};


export default CategoryCard;