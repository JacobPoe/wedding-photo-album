import {SET_ACTIVE_TAB} from "../actions/set-active-tab";

// default 0 ensures we default to displaying the <Grid /> for tab 1
export const activeTab = (state = 0, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return action.activeTab;
        default:
            return state;
    }
}