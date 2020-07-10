import React from 'react';
import { useSelector } from 'react-redux';

import City from '../containers/city';

const CityList = () => {
  const cities = useSelector(state => state.cities);

  return (
    <ul className="list-group cities">
      {cities.map(city =>
        <City key={city.name} city={city} />
      )}
    </ul>
  );
};

export default CityList;
