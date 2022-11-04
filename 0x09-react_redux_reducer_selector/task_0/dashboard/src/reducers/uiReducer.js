import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};
export let uiReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	  case DISPLAY_NOTIFICATION_DRAWER:
		return { ...state, isNotificationDrawerVisible: true };
	  case HIDE_NOTIFICATION_DRAWER:
		return { ...state, isNotificationDrawerVisible: false };
	  case LOGIN_SUCCESS:
		return { ...state, isUserLoggedIn: true };
	  case LOGIN_FAILURE:
	  case LOGOUT:
		return { ...state, isUserLoggedIn: false };
	  default:
		return state;
	}
  };