import React, { useState } from "react";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  

  // useEffect(() => {
  //   setImageSlides(props.imageSlides)
  //   console.log('image useeffect hit', imageSlides)
  // }, [props])

  const nextSlide = () => {
    setCurrent(current === props.imageSlides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? props.imageSlides.length - 1 : current - 1);
  };

  // console.log(props.imageSlides);
  // console.log(typeof props.imageSlides)

  let imageSlidesMapped = [];

  if (props.imageSlides) {
    // console.log("if hit");
    imageSlidesMapped = props.imageSlides.map((slide, index) => {
      return (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {current === index && <img src={slide} alt="" className="image" />}
        </div>
      );
    });
  }

  // console.log(imageSlidesMapped)

  return (
    <section>
      {/* <h4 className="workTitle">{props.title}</h4> */}
      <div className="imageSlider">
        <p className="prevArrow" onClick={prevSlide}>
          &#10092;
        </p>
        <a
          className="imageHover"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          {imageSlidesMapped}
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
