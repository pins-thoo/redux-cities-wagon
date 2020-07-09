import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

const City = (props) => {
  return (

    <li className="list-group-item">
      <button onClick={() => props.selectCity(props.city)} style={{ backgroundColor: 'black' }}>{props.city.name}</button></li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);

