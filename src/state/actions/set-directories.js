import { SET_DIRECTORIES } from "../reducers/album";

export function setDirectories(directories) {
    return {
        type: SET_DIRECTORIES,
        directories
    }
}