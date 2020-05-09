const userReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_USER" :
            return action.users;
        case "POST_USER" :
            return [...state, action.payload];
        case "PUT_USER" :
            return "";
        case "DELETE_USER" :
            return "";
        default : 
            return state
    }
}

export default userReducer;