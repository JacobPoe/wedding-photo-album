import {SET_DISPLAY_URI} from "../reducers/navigation";

export function setDisplayUri(displayUri) {
    return {
        type: SET_DISPLAY_URI,
        displayUri
    }
}