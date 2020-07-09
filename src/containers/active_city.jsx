import React from 'react';
import { useSelector } from 'react-redux';

const ActiveCity = () => {
  const activeCity = useSelector(state => state.activeCity);
  if (!activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const { slug, name, address } = activeCity;
  const url = `https://kitt.lewagon.com/placeholder/cities/${slug}`;

  return (
    <div className="active-city">
      <h3>{name}</h3>
      <p>{address}</p>
      <img src={url} width="100%" alt="" />
    </div>
  );
};

export default ActiveCity;
