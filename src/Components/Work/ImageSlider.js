import React, {useState} from 'react';

const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0);

    console.log(props.theme)

    const nextSlide = () => {
        setCurrent(current === props.slides.length-1 ? 0 : current+1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? props.slides.length-1 : current-1)
    };


    console.log(props)
    return (
        <div>
            <h4 className='workTitle'>{props.title}</h4>
            <section className='imageSlider'>
                <p className='prevArrow' onClick={prevSlide}>&#10092;</p>
                {props.slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {current === index && <img src={slide} alt='' className='image'/> }
                        </div> 
                    )
                })}
                <p className='nextArrow' onClick={nextSlide}>&#10093;</p>
            
            </section>
        </div>
    )
};

export default ImageSlider;