import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cycleBanner1 from "../../assets/cycle pic.avif";

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
            src={cycleBanner1}
            alt="Special Offers"
            // className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner2.jpg"
            alt="Application Features"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner3.jpg"
            alt="Special Products"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
