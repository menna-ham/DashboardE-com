import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  EffectCards,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import styles from './product.module.css';

export const Product = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.items}></div>
          <div className={`${styles.items} ${styles.head}`}>
            <p>Flower Embroidery Hoop Art</p>
            <hr />
          </div>
          <div className={`${styles.items} ${styles.price}`}>
            <p className={styles.old}>$699</p>
            <p className={styles.new}>$345</p>
          </div>
          <div className={`${styles.items} ${styles.cart}`}>
            <i className="fa fa-shopping-cart"></i>
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>

      {/* <div
          className="container relative w-72 h-96 mx-auto bg-cover  cursor-pointer shadow-md"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg');",
        }}
      >
        <div className="overlay w-full h-full grid grid-rows-1 grid-cols-1 bg-gray-700 bg-opacity-90 opacity-0 transition-all duration-500">
          <div className="items"></div>
          <div className="items head text-white text-xl leading-10 transform translate-y-10 transition duration-700">
            <p>Flower Embroidery Hoop Art</p>
            <hr className="w-0 border-b-2 border-white absolute bottom-0 left-4 transition duration-500" />
          </div>
          <div className="items price text-white text-lg font-bold opacity-0 transform translate-y-10 transition duration-700">
            <p className="old">$699</p>
            <p className="new">$345</p>
          </div>
          <div className="items cart text-white text-sm opacity-0 transform translate-y-10 transition duration-700">
            <i className="fa fa-shopping-cart text-white text-lg"></i>
            <span>ADD TO CART</span>
          </div>
        </div>
      </div> */}
    </>
  );
};

const TopProducts = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={50}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        // }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // pagination={{
        //   dynamicBullets: true,
        //   bulletActiveClass:'swiper-pagination-bullet-active',
        //   clickable:true,

        // }}
        // navigation={{
        //   nextEl:'next',
        //   prevEl:'prev',
        //   enabled:true
        // }}
        // modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="bg-pink-500">
            hello
            <div className="flex flex-row w-full justify-between items-center">
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      {/* <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper">
      <SwiperSlide className='bg-pink-300 p-4 rounded-lg'>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper> */}
    </>
  );
};

export default TopProducts;
