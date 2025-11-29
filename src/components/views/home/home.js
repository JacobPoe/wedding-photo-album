import React from "react";
import { connect } from "react-redux";

import "../views-base.css";
import "./home.css";

import config from "../../../../site.config";

import Grid from "../../layout/grid/grid";
import Header from "../header/header";
import Modal from "../../layout/modal/modal";

// TODO: Request from home media server using HTTP Service
const testImages = config.images;
const toast = config.text.home.toast;

const Home = (props) => {
    console.log(props)
    return (
        <>
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
            { props.activeImage && (
                <Modal />
            )}
        </>
    )
}

export default connect((state) => ({
    activeImage: state.activeImage
}))(Home);