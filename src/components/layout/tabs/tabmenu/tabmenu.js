import React from "react";

import Tab from "../tab/tab";

const TabMenu = (props) => {
    return (
        <div>
            {props.tabs.map((tab, index) => {
                return (<Tab category={tab} index={index} key={index}/>);
            })}
            <hr/>
        </div>
    )
}

export default TabMenu;