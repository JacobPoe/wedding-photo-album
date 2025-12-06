import { SET_ACTIVE_IMAGE } from "../reducers/album";

export function setActiveImage(activeImage) {
    return {
        type: SET_ACTIVE_IMAGE,
        activeImage
    }
}
