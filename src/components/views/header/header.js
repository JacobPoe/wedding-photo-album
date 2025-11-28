import React from "react";

import config from "../../../../site.config";

import "./header.css";

const title = config.text.home.header.title;

const Header = (props) => {
    return (
        <div className={`header`}>
            <h1>{title}</h1>
        </div>
        )
    };

export default Header;