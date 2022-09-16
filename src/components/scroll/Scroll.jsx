import React from 'react';
import './scroll.css'
import img1 from '../../assets/scroll/1.jpg';
import img2 from '../../assets/scroll/2.jpg';
import img3 from '../../assets/scroll/3.jpg';
import img4 from '../../assets/scroll/4.jpg';
import img5 from '../../assets/scroll/5.jpg';
import img6 from '../../assets/scroll/6.jpg';
import img7 from '../../assets/scroll/7.jpg';
import img8 from '../../assets/scroll/8.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: img1,
  },
  {
    avatar: img2,
  },
  {
    avatar: img3,
  },
  {
    avatar: img4,
  },
  {
    avatar: img5,
  },
  {
    avatar: img6,
  },
  {
    avatar: img7,
  },
  {
    avatar: img8,
  },
]
const Scroll = () => {
  return (
    <section id="testimonial">

      <h5>Review from clients</h5>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar},index) =>{
            return(
                <SwiperSlide key={index} className="testimonial">
            <div class="client__avatar">
              <img className="img" src={avatar} alt="avater"/>
            </div>
          </SwiperSlide>
            )
          })
        }        
      </Swiper>
    </section>
  )
}

export default Scroll;