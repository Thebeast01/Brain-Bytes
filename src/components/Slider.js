import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../Images/course07.jpg";
import img2 from "../Images/course01.jpg";
import img3 from "../Images/course03.jpg";
import img4 from "../Images/img-1.jpg";

const Slider = () => {
  return (
    <div className="z-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src={img1}
            className="w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            className="w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={img3}
            className="w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            className="w-[100%] h-[100vh] overflow-x-hidden overflow-y-hidden"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
