import React from "react";
import { connect } from "react-redux";

import { setActiveTab } from "../../../state/actions/set-active-tab";
import Button from "../../controls/button/button";

const Tab = (props) => {
    const changeTab = () => {
        props.dispatch(setActiveTab(props.index))
    }

    return (
        <Button
            type="tab"
            id={props.category.split(' ').join('')}
            text={props.category}
            className={props.index === props.activeTab ? ['active'] : []}
            onClickHandler={changeTab}
        />
    )
}

export default connect((state) => ({
    activeTab: state.album.activeTab
}))(Tab);