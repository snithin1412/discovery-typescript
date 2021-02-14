import React from 'react';
import Image from '../../atoms/image/Image';

interface Props {
    imageContent: {
        img: string;
        imgAlt: string;
    }
}

const CarouselImage: React.FC<Props> = ({imageContent}) => {
    return (
        <div>
            <Image className="border-rad-10" location={imageContent.img} alt={imageContent.imgAlt} width={875} height={490} />
        </div>
    );
};

export default CarouselImage;