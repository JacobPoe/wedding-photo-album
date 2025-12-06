import { SET_ACTIVE_TAB } from "../reducers/album";

export function setActiveTab(activeTab) {
    return {
        type: SET_ACTIVE_TAB,
        activeTab
    }
}