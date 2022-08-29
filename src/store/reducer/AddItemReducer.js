const initialState = {
  data: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload],
        // data: state.data.includes(action.payload) === false ? [...state.data, action.payload] : [...state.data, null],
      };
    case 'RESET':
      return {
        ...state,
        data: [],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        data: state.data.filter(item => item !== state.data[action.payload]),
      };
    default:
      return state;
  }
};

export default AddItemReducer;
