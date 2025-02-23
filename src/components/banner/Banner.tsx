import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cycle1 from "../../assets/Cycle 1.png";
import Cycle2 from "../../assets/Cycle 2.png";
import Cycle3 from "../../assets/Cycle 3.png";

const Banner = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src={Cycle1}
            alt="Special Offers"
            // className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cycle2}
            alt="Application Features"
            // className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cycle3}
            alt="Special Products"
            // className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
