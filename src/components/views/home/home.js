import React from "react";

import "../views-base.css";
import "./home.css";

import config from "../../../../site.config";

import Grid from "../grid/grid";
import Header from "../header/header";

// TODO: Request from home media server using HTTP Service
const testImages = config.images;
const toast = config.text.home.toast;

const Home = () => {

    return (
        <div className="dark-mode">
            <Header />
            <div className={`view view__home`}>
                <div className={"view-container"}>
                    {/* stretch goal: design a carousel to live above the toast */}
                    <p className="toast">{toast}</p>
                    <Grid images={testImages} />
                </div>
            </div>
            {/* TODO: make a real footer */}
            <hr />
            <span>📷: <a href="https://harryacosta.com/columbus-ohio-photography" target="_blank">Harry Acosta Photography</a></span>
        </div>
    )
}

export default Home;