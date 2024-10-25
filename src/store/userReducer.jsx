// userReducer.jsx
import { SET_MENU_DATA } from './userAction.jsx';

const initialState = {
  menuData: [], // initial empty array for menu data
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_DATA:
      console.log('Setting menu data:', action.payload); // Debugging line
      return {
        ...state,
        menuData: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;

