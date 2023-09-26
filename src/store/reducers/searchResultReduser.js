const defaultState = {
  ip: '',
  location: '',
  timezone: '',
  isp: '',
  latitude: '',
  longitude: '',
};

const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export const searchResultReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        ip: action.payload.ip,
        location: `${action.payload.location.region}, ${action.payload.location.country}`,
        timezone: `UTC ${action.payload.location.timezone}`,
        isp: action.payload.isp,
        latitude: action.payload.location.lat,
        longitude: action.payload.location.lng,
      };
    default:
      return state;
  }
};

export const addSearchAction = (payload) => ({ type: ADD_SEARCH_RESULT, payload });
