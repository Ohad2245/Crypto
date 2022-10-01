import React from 'react';
import videoBg from '../../assets/video.mp4';
import './header.css';

const Header = () => {
  return (
    <div className="header">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Header;