import { lightTheme } from "../config/colors";
import { SWITCH_COLOR } from "./colorAction";
 
const initialState = {
    theme: lightTheme
}

export const themeReducer = (state=initialState, action) =>{
    switch(action.type) {
        case SWITCH_COLOR:
            return{
                theme: action.theme
            }
        default:
            return state
    }
}