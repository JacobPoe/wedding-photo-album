export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
export const SET_BATCH_SIZE = 'SET_BATCH_SIZE';
export const SET_DISPLAY_URI = 'SET_DISPLAY_URI';
export const SET_OFFSET = 'SET_OFFSET';

export const navigation = (state, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.activeTab }
        case SET_BATCH_SIZE:
            return { ...state, batchSize: action.batchSize };
        case SET_DISPLAY_URI:
            return { ...state, displayUri: action.uri };
        case SET_OFFSET:
            return {
                ...state,
                activeTab: {
                    ...state.activeTab,
                    offset: action.offset
                }
            };
        default:
            return { ...state };
    }
}