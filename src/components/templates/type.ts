interface ImageProps {
    img: string;
    imgAlt: string;
}

export interface Props {
    headerData: {
        logo: {list: string; listAlt: string; logo: string; logoAlt: string;};
        nav: string[];
        search: {placeHolder: string; button: string;};
    };
    carouselData: {heading: string; subHeading: string; tag1: string; tag2: string; image: ImageProps}[];
    categoryData: { image: string, text: string }[];
}