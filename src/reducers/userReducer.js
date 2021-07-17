import { userInitialState } from "./../config/initStates";
import {
    CHECK_USER_AUTH,
    LOGOUT_USER,
    SET_TOKEN,
    SET_USER
} from "./../config/types";

const userReducer = (state = userInitialState, action) => {

    switch (action.type) {
        case LOGOUT_USER:
            state = { userInitialState }
            return state
        case SET_TOKEN:
            state = { ...state, access_token: action.payload }
            return state
        case SET_USER:
            state = {
                ...state,
                isLoggedIn: true,
                email: action.payload.email,
            }
            return state
        default:
            return state
    }
}


export default userReducer