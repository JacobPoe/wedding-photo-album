import { SET_DIRECTORIES } from "../reducers/album";

export function setAssetDirectories(directories) {
    return {
        type: SET_DIRECTORIES,
        directories
    }
}