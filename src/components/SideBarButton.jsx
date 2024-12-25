import React from 'react';
import { Link } from 'react-router-dom';

const SideBarButton = ({ text, imgSrc, isActive, link, onClick }) => {
  return (
    <Link 
      to={link || '/'} 
      className="mt-3" 
      style={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <button
        className="primary_h text-white f-16 box1"
        style={{
          backgroundColor: isActive ? '#007bff' : 'transparent',
          color: isActive ? 'white' : '#000000',
          border: '1px solid #fff',
          borderRadius: '8px',
          height: '45px',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img
          src={imgSrc}
          alt={text}
          style={{
            fill:'white',
            filter: isActive ? 'invert(1)' : 'invert(0)',
            transition: 'filter 0.3s',
          }}
        />
        <p style={{ color: isActive ? 'white' : '#000000' }}>{text}</p>
      </button>
    </Link>
  );
};

export default SideBarButton;
