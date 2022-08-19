const initialState = {
    data: []
}

const AddItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state, data: [ ...state.data, action.payload ]
            }
        case "RESET":
            return {
                ...state,
                data: []
            }
        case "DELETE_ITEM":
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload)
            }
    
        default:
            break;
    }

    return state;
}

export default AddItemReducer