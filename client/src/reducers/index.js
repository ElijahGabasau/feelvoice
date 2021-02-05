import { combineReducers } from 'redux';
import classReducer from './classReducer';
import teacherReducer from './teacherReducer';
import ticketReducer from './ticketReducer';
import chosenTicketsReducer from './chosenTicketsReducer';
import newsReducer from './newsReducer';
import pinnedReducer from './pinnedReducer';
import widthReducer from './widthReducer';
import authReducer from './authReducer';

export default combineReducers ({
  chosenTickets: chosenTicketsReducer, 
  classes: classReducer,
  teachers: teacherReducer,
  tickets: ticketReducer,
  news: newsReducer,
  pinned: pinnedReducer,
  width: widthReducer,
  auth: authReducer
});