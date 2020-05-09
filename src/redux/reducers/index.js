import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer"
import userReducer from "./userReducer"
import loginReducer from "./loginReducer"

const allReducers = combineReducers({
    menuDrawer : drawerReducer,
    userList : userReducer,
    existingUser : loginReducer
})

export default allReducers;