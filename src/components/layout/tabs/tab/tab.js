import React from "react";
import { connect } from "react-redux";

import { setActiveTab } from "jake-compoenents/dist/state/actions/set-active-tab";
import Button from "../../../controls/button/button";

const Tab = (props) => {
    const changeTab = () => {
        props.dispatch(setActiveTab({
            index: props.index,
            category: props.category,
            offset: 0
        }))
    }

    return (
        <Button
            type="tab"
            id={props.category.replace(/[-_]/g, '')}
            text={props.category.replace(/[-_]/g,' ')}
            className={props.index === props.activeTab.index ? ['active'] : []}
            onClickHandler={changeTab}
        />
    )
}

export default connect((state) => ({
    activeTab: state.navigation.activeTab
}))(Tab);