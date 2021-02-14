import React from 'react';
import Text from '../../atoms/text/Text';
import Image from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';
import './style.css';

interface Props {
    textContent: {
        heading: string;
        subHeading: string;
        tag1: string;
        tag2: string;
    }
}

const CarouselText: React.FC<Props> = ({textContent}) => {
    return (
        <div className="carousel-text">
            <div><Text content={textContent.heading} type="carousel-heading"/></div>
            <div className="padding-top-14"><Text content={textContent.subHeading} type="carousel-subheading"/></div>
            <div className="margin-tb-18"><Text content={textContent.tag1} type="carousel-tags"/><Text content={textContent.tag2} type="carousel-tags"/></div>
            <div className="play-button">
                <Image location="images/play-button-5.png" width={92} height={67}/>
                <Link name="Play" location="/" active="carousel-play"  />
            </div>
        </div>
    );
};

export default CarouselText;