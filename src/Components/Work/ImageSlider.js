import React, {useState} from 'react';

const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {

    };

    const prevSlide = () => {

    };


    console.log(props)
    return (
        <section className='imageSlider'>
            <p className='prevArrow' onClick={prevSlide}>left</p>
            {props.slides.map((slide, index) => {
                return <img src={slide} alt=''/>
            })}
            <p className='nextArrow' onClick={nextSlide}>right</p>
        </section>
    )
};

export default ImageSlider;