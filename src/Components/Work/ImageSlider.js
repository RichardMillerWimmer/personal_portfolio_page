import React, { useState, useEffect } from "react";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  // const [imageSlides, setImageSlides] = useState([]);

  // useEffect(() => {
  //   console.log('useeffect hit')
  //   setImageSlides(props.images)
  // }, [props])

  const nextSlide = () => {
    setCurrent(current === props.images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? props.images.length - 1 : current - 1);
  };

  console.log(props.imagesSlides);
  // console.log(imageSlides)

  let imageSlidesMapped;
  if(props) {
   imageSlidesMapped = props.imageSlides.map((slide, index) => {
    return (
      <div
        className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {current === index && (
                    <img src={slide} alt="" className="image" />
                  )}
      </div>
    )
    })}

  return (
    <section>
      {/* <h4 className="workTitle">{props.title}</h4> */}
      <div className="imageSlider">
        <p className="prevArrow" onClick={prevSlide}>
          &#10092;
        </p>
        <a className="imageHover" href={props.title} target="_blank" rel="noreferrer">
          {/* {props ? imageSlidesMapped : ''} */}
          {/* <img src={props.images}/> */}
          {/* <div className="siteHover">
            <p className="visitSite">visit site</p>
            {imageSlides.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {current === index && (
                    <img src={slide} alt="" className="image" />
                  )}
                </div>
              );
            })}
          </div> */}
        </a>
        <p className="nextArrow" onClick={nextSlide}>
          &#10093;
        </p>
      </div>
    </section>
  );
};

export default ImageSlider;
