import React from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/img2.png'

const ImgStyle = {
    height: '30px',
};

const ImageList = () => {
    const list = (
        <ul>
            <li>
                <img style={ImgStyle} src={img1} alt="alt from react conponent 1" />
            </li>
            <li>
                <img style={ImgStyle} src={img2} alt="alt from react conponent 2" />
            </li>
        </ul>
    );

    return (
        <div>
            <h3>image list</h3>
            {list}
        </div>
    );
}

export default ImageList
