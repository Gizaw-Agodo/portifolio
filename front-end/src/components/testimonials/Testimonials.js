import React, { useEffect, useState } from "react";
import "./testimonials.css";
import SwiperCore, { Autoplay } from "swiper";

// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {urlFor,client} from "../../client"

const Testimonials = () => {
     SwiperCore.use([Autoplay]);
     const [testimonials,setTestimonials] = useState([])
     useEffect(()=>{
      const query = `*[_type == "testimonials"]`;
      client.fetch(query).then((data) => {
      setTestimonials(data);
    });  
  },[])
  
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {testimonials.map(({ imgurl, name, feedback }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={urlFor(imgurl)} alt="gama" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{feedback}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
