import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../Assests/images/ui-ux.png";
import img2 from "../../Assests/images/graphic.jpg";
import img3 from "../../Assests/images/web-development.png";
import img4 from "../../Assests/images/web-design.png";
import './Slider.css';

const Slider = () => {
  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      <SwiperSlide>
        <img src={img1} className='w-[98%] h-[60vh] overflow-x-hidden overflow-y-hidden' ></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2 } className='w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden'> 
          
       
    </img>
      </SwiperSlide>
      <SwiperSlide> <img src={img3} className='w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden'> 
          
       
          </img></SwiperSlide>
      <SwiperSlide>
        <img src={img4}className='w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden'/>
        
      </SwiperSlide>
      {/* ... */}
    </Swiper> 
     
    </div>
  )
}

export default Slider

