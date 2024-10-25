// userActions.jsx
export const SET_MENU_DATA = 'SET_MENU_DATA';

export const setMenuData = (menuData) => {
  return {
    type: SET_MENU_DATA,
    payload: menuData,
  };
};
