// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import phone from '../Images/phone.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Header() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="img-fluid" src={phone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://dlcdnwebimgs.asus.com/files/media/fb693c7c-211d-4c70-a6ba-6a14aae9fac6/v2/images/large/g_kv.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.asus.com/WebsitesBanner/global/banners/hdf4csxssyg7gjn3/hdf4csxssyg7gjn3-0_0_desktop_1X.jpg?webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-50 bg-white" src="https://www.apple.com/v/watch/ax/images/overview/se/tile-watch-se__knji2d25x8qe_large.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-50" src="https://images.samsung.com/is/image/samsung/p6pim/bd/qa55q70aarser/gallery/bd-qled-q70a-qa55q70aarser-507696328?$684_547_PNG$" alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
