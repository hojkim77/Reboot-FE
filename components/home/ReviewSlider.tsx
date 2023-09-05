// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import type { NextPage } from "next";

// Import Swiper style
import styles from "./ReviewSlider.module.scss";
const ReviewSlider: NextPage = ({}) => {
  //? pagination 번호 리스트
  const pagination = {
    clickable: true,
    clickableClass: styles.swiperpagination,
    bulletClass: styles.swiperpaginationbullet,
    bulletActiveClass: styles.swiperpaginationbulletactive,
    renderBullet: function (index: number, className: string) {
      return '<div class="' + className + '">' + "</div>";
      //TODO className 적용시켜야함.
    },
  };

  //? slide contents
  const items = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "160px" }}>
        <div
          style={{ fontSize: "40px", marginBottom: "60px", fontWeight: "bold" }}
        >
          {"바쁜시간대에 조리가 너무 편해졌어요"}
        </div>
        <div style={{ fontSize: "20px", marginBottom: "40px" }}>
          퇴근 시간대에는 손님들이 한 번에 너무 몰려서 주방이 전체적으로
          막혔는데,
          <br />
          정해진 양을 한 번만 넣으면 되니
          <span style={{ fontSize: "20px", fontWeight: "700" }}>
            직원들이 편하게 일하는게 느껴지네요.
          </span>
        </div>
        <div style={{ fontSize: "20px" }}>김**님 (분식집 자영업)</div>
      </div>
    );
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items}
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items}
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items}
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items}
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
