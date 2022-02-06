import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import sliderStyles from "@styles/slider.module.css";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className={sliderStyles.slider}>
        <FaArrowCircleLeft className={sliderStyles.leftArrow} onClick={prevSlide} />
        <FaArrowCircleRight className={sliderStyles.rightArrow} onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={`${index} === ${current} ? ${sliderStyles.slideActive} : ${sliderStyles.slide}`}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='image' className={sliderStyles.image} />
              )}
            </div>
          );
        })}
      </section>
    );
  };
  
  export default ImageSlider;