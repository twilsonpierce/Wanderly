import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import components below:
import WanderMap from '../map/map';

//import action(s) related to container from the action folder:
import { test } from '../../actions/map-actions';

const mapStateToProps = (state) => {
  return {
    map: state.mapReducer
  }
}

const matchDispatchToProps = (dispatch) => ({
    test: bindActionCreators(test, dispatch)
})


export default connect(mapStateToProps, matchDispatchToProps)(WanderMap);
