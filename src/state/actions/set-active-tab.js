export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

export function setActiveTab(activeTab) {
    return {
        type: SET_ACTIVE_TAB,
        activeTab
    }
}