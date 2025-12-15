export const SET_ASSETS = 'SET_ASSETS';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE'
export const SET_DIRECTORIES = 'SET_DIRECTORIES';

export const album = (state, action) => {
    switch (action.type) {
        case SET_DIRECTORIES:
            return {
                ...state,
                directories: action.directories.reduce((acc, dir) => {
                    acc[dir] = [];
                    return acc;
                }, {})
            }
        case SET_ACTIVE_IMAGE:
            return {
                ...state,
                activeImage: { ...action.activeImage }
            }
        case SET_ASSETS:
            const directories = {
                ...state.directories,
                [action.assets.category]: [...action.assets.files]
            }

            return {
                ...state,
                directories: { ...directories }
            }
        default:
            return { ...state };
    }
}