import React from 'react';

const ImageSlider = (props) => {

    console.log(props)
    return (
        <div>
            {props.slides.map((slide, index) => {
                return <img src={slide} alt=''/>
            })}
        </div>
    )
};

export default ImageSlider;