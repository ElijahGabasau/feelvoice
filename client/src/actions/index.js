import { fetchTeachersAction, deleteTeacherAction, updateTeacherAction, createTeacherAction } from './teacherActions';
import { fetchClassesAction, deleteClassAction, updateClassAction, createClassAction } from './classActions';
import { fetchTicketsAction,deleteTicketAction,  updateTicketAction, createTicketAction } from './ticketActions';
import { fetchNewsAction, deleteNewsAction, updateNewsAction, createNewsAction } from './newsActions';
import { fetchPinnedAction, deletePinnedAction, updatePinnedAction, createPinnedAction } from './pinnedActions';
import { loginUserAction, logoutUserAction, fetchUserAction } from './authActions';

export const fetchTeachers = fetchTeachersAction;
export const deleteTeacher = deleteTeacherAction;
export const updateTeacher = updateTeacherAction;
export const createTeacher = createTeacherAction;

export const fetchClasses = fetchClassesAction;
export const deleteClass = deleteClassAction;
export const updateClass = updateClassAction;
export const createClass = createClassAction;

export const fetchTickets = fetchTicketsAction;
export const deleteTicket = deleteTicketAction;
export const updateTicket = updateTicketAction;
export const createTicket = createTicketAction;

export const fetchNews = fetchNewsAction;
export const deleteNews = deleteNewsAction;
export const updateNews = updateNewsAction;
export const createNews = createNewsAction;

export const fetchPinned = fetchPinnedAction;
export const deletePinned = deletePinnedAction;
export const updatePinned = updatePinnedAction;
export const createPinned = createPinnedAction;

export const loginUser = loginUserAction;
export const logoutUser = logoutUserAction;
export const fetchUser = fetchUserAction;

export const switchTickets = (type) => {
  switch (type) {
    case 'all': {
      return {
        type: 'ALL_TICKETS',
        payload: 'all'
      }
    }
    case 'personal': {
      return {
        type: 'PERSONAL_TICKETS',
        payload: 'personal'
      }
    }
    case 'group': {
      return {
        type: 'GROUP_TICKETS',
        payload: 'group'
      }
    }
    case 'top': {
      return {
        type: 'TOP_TICKETS',
        payload: 'top'
      }
    }
    default: return;
  }
}

export const getWidth = () => {
  const width = window.innerWidth;

  return {
    type: 'GET_WIDTH',
    payload: width,
  }
}