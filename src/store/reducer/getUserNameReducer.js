const initialState = {
  username: null,
};

const getUserNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default getUserNameReducer;
