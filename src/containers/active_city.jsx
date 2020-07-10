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

// import React from 'react';
// import { connect } from 'react-redux';

// const ActiveCity = (props) => {
//   if (!props.activeCity) {
//     return (
//       <div className="active-city">
//         <p>Select a city...</p>
//       </div>
//     );
//   }

//   const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

//   return (
//     <div className="active-city">
//       <h3>{props.activeCity.name}</h3>
//       <p>{props.activeCity.address}</p>
//       <img src={url} width="100%" />
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return {
//     activeCity: state.activeCity
//   };
// }

// export default connect(mapStateToProps)(ActiveCity);
