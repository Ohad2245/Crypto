/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './picture.css';
import bitcoin from '../../assets/bitcoin.jpg';
// import {motion} from 'framer-motion';

const Picture = () => {
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        // const reveals = this.myRef.current;
    
        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;
    
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    
      window.addEventListener("scroll", reveal);
  return (
    <section id='picture'>
      <div className='container picture__container reveal'>
        <div className='picture__me '>
          <div className='picture__me-image '>
            <img src={bitcoin} alt="image" width="100%" height="100%"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Picture;