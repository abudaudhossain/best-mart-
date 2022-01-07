import React from 'react';
import {
    SideBySideMagnifier
} from "react-image-magnifiers";


const MyImgMagnifier = ({img}) => {

    return (
        <div style={{ width: "100%"}}>
            <SideBySideMagnifier
                imageSrc={img}
                imageAlt="Example"
                largeImageSrc="https://m.media-amazon.com/images/I/61Yeir0uhIL._AC_SL1322_.jpg"
                alwaysInPlace={true}
                fillAvailableSpace={false} 
            />
            
        </div>
    );
};

export default MyImgMagnifier;