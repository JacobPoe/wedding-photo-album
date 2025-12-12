import {SET_OFFSET} from "../reducers/navigation";

export function setOffset(offset) {
    return {
        type: SET_OFFSET,
        offset
    }
}