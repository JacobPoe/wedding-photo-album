import { SET_ACTIVE_IMAGE } from "../actions/active-image";

export const activeImage = (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_IMAGE:
            return action.activeImage;
        default:
            return state;
    }
}
