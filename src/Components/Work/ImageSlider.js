import React, {useState} from 'react';

const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === props.slides.length-1 ? 0 : current+1)
        console.log(current)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? props.slides.length : current-1)
        console.log(current)
    };


    console.log(props)
    return (
        <section className='imageSlider'>
            <p className='prevArrow' onClick={prevSlide}>left</p>
            {props.slides.map((slide, index) => {
                return <img src={slide} alt='' className='image'/> 
            })}
            <p className='nextArrow' onClick={nextSlide}>right</p>
        </section>
    )
};

export default ImageSlider;