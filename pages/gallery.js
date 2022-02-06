import galleryStyles from "@styles/components/gallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import ImageSlider from "@components/Slider";
import { SliderData } from "@components/SliderData";

SwiperCore.use([EffectFade, Navigation]);
//Testing Swiper Slides



export default function Gallery() {
  
  return (
    <div className={galleryStyles.galleryDiv}>
      <h1 className={`title ${galleryStyles.titleshadow}`}>Gallery</h1>
      <div className={galleryStyles.mainBody}>
        <div className={galleryStyles.galleryContainer}>
          <div className={galleryStyles.leftSliderContainer}>
            <div className={galleryStyles.date}>
              <h2>2021</h2>
            </div>
            <div className={galleryStyles.sliderCon}>
            <ImageSlider slides={SliderData}/>
            </div>
          </div>
          <div className={galleryStyles.leftSliderContainer}>
            <div className={galleryStyles.sliderCon}>
            <ImageSlider slides={SliderData}/>
            </div>
            <div className={galleryStyles.date}>
              <h2>2019</h2>
            </div>
          </div>
    

        </div>

      
        
      </div>

      

     

    </div>
  );
}
