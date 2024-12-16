import React from 'react'
import './Start.css'
import trainer from '../images/trainer.png'
const Start = () => {
  return <section id='Classes' >
    <div className='container'>
        <div className='start_wrapper'>
            <div className='start_img'>
                <img src={trainer} alt= " " data-aos="fade-left"
data-aos-duration="1200" />
                </div>
            <div className='start_content'
            data-aos="fade-right"
data-aos-duration="1500" >
            <h2 className='section_title'>
            Start your  <span className='highlights '>Journey</span> with us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!</p>
            <button className='register_btn'>Get Started</button>
            </div>
        </div>
    </div>

  </section>
}
export default Start; 