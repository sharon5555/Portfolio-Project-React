import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/put.png';
import IMG2 from '../../assets/put.png';
import IMG3 from '../../assets/put.png';
import IMG4 from '../../assets/put.png';

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: IMG1,
    name: 'Nador',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute',
  },

  {
    avatar: IMG2,
    name: 'Naza',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute',
  },

  {
    avatar: IMG3,
    name: 'Doris',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute',
  },

  {
    avatar: IMG4,
    name: 'Cynn',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ivsto quod nam inpedit solute Lorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit soluteLorem ipsum dolor sit amet consectetur adipisicing elit Ivsto quod nam inpedit solute',
  }
]


const testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
              <img src={IMG1} />
              <h5>{name}</h5>
          </div>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial