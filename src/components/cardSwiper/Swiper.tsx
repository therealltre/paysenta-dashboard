import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import CardBlack from "../creditcard/CardStyleDark";
import CardGreen from "../creditcard/CardStyleGreen";
import CardMagenta from "../creditcard/CardStyleMagenta";

const SwiperComponent = () => {
  const [swiperWidth, setSwiperWidth] = useState(360); // Initial width for mobile view

  const swiperStyles = {
    width: swiperWidth,
    height: 250,
  };

  const swiperSlideStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  };

  const customPaginationStyles = `
    .swiper-pagination-bullet {
      background-color: #08ADAD;
    }
  `;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Set width for desktop view
        setSwiperWidth(330);
      } else {
        // Set width for mobile view
        setSwiperWidth(360);
      }
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial width setup
    handleResize();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style>{customPaginationStyles}</style>
      <Swiper
        modules={[Pagination]}
        effect="cards"
        grabCursor={true}
        className="mySwiper"
        pagination={{ clickable: true }} // Pagination with ellipsis
        style={swiperStyles} // Apply styles to the Swiper
      >
        <SwiperSlide style={swiperSlideStyles}>
          <CardBlack />
        </SwiperSlide>
        <SwiperSlide style={{ ...swiperSlideStyles }}>
          <CardGreen />
        </SwiperSlide>
        <SwiperSlide style={{ ...swiperSlideStyles }}>
          <CardMagenta />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
