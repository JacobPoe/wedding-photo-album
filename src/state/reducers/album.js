export const SET_DIRECTORIES = 'SET_DIRECTORIES';
export const SET_ACTIVE_IMAGE = 'SET_ACTIVE_IMAGE'
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

export const album = (state, action) => {
    switch (action.type) {
        case SET_DIRECTORIES:
            return {
                ...state,
                directories: [...action.directories]
            }
        case SET_ACTIVE_IMAGE:
            return {
                ...state,
                activeImage: { ...action.activeImage }
            }
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.activeTab
            }
        default:
            return { ...state };
    }
}