import React from "react";

import config from "../../../../site.config";

import "./header.css";

const title = config.text.home.header.title;

const Header = (props) => {
    return (
        <header className={`header`}>
            <h1><a className={`header__home`} href="#">{title}</a></h1>
        </header>
        )
    };

export default Header;