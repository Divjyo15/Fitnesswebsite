import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards } from 'swiper/modules';
import avatar01 from '../images/avatar01.png';
import avatar02 from '../images/avatar02.png';
export default function Testimonial() {
  return (
    <>
      <section>
        <div className='container sliders'>
          <div className='section_title'> Testimonials</div>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='slide_item slide_img02'>
                <div className='slide_img'>
                  <img src={avatar01} alt=" " />
                </div>
                <h4>Jesica Fernandez</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                    </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide_item slide_img01 '>
                <div className='slide_img'>
                  <img src={avatar02} alt=" " />
                </div>
                <h4>Alice Jackson</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                </p>
              </div>
            </SwiperSlide>
</Swiper>
        </div>
      </section>
    </>
  );
}
