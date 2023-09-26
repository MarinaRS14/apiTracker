const defaultState = {
  userIP: '',
};

const ADD_USER_IP = 'ADD_USER_IP';

export const userIPReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_IP:
      return { ...state, userIP: action.payload };
    default:
      return state;
  }
};

export const addDefaultIPAction = (payload) => ({ type: ADD_USER_IP, payload });
