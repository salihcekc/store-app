const initialState = {
    data: []
}

const DetailItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                ...state,
                data: [action.payload]
            }    
        default:
            return state;
    }
}

export default DetailItemReducer