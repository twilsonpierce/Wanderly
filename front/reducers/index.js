import React from 'react';
import { combineReducers } from 'redux';

//import reducers here:
import mapReducer from './map-reducer';
import itineraryReducer from './itinerary-reducer';
import destinationReducer from './destination-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer';


const allReducers = combineReducers({
//Upon import, reducers should go below:
  destinationReducer,
  mapReducer,
  itineraryReducer,
  profileReducer,
  userReducer
});

export default allReducers;
