import React from 'react';
import { useDispatch } from 'react-redux';

import selectCity from '../actions/index';

const City = ({ city }) => {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button
        onClick={() => dispatch(selectCity(city))}
        style={{ backgroundColor: 'black' }}
      >
        {city.name}
      </button>
    </li>
  );
};

export default City;

