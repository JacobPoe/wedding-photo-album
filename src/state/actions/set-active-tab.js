import { SET_ACTIVE_TAB } from "../reducers/navigation";

export function setActiveTab(activeTab) {
    return {
        type: SET_ACTIVE_TAB,
        activeTab
    }
}