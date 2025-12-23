import React from "react";

import Tab from "../tab/tab";

const TabMenu = (props) => {
    return (
        <section>
            {props.tabs.map((tab, index) => {
                return (<Tab category={tab} index={index} key={index}/>);
            })}
            <hr/>
        </section>
    )
}

export default TabMenu;