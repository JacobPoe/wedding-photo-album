import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../views-base.css";
import "./home.css";

import config from "../../../../site.config";
import { buildTabMeta, loadDirectories } from "../../../services/asset.service";

import Header from "../header/header";
import Modal from "../../layout/modal/modal";
import Tab from "../../layout/tab/tab";
import Grid from "../../layout/grid/grid";

const toast = config.text.home.toast;

const Home = (props) => {
    const [tabs, setTabs] = useState([]);
    const loadTabs = async () => {
        const directories = await loadDirectories();

        const tabsMeta = buildTabMeta(directories);
        setTabs(tabsMeta);
    }
    useEffect(() => {
      loadTabs();
    }, []);

    return (
        <>
            <div className="dark-mode">
                <Header />
                <div className={`view view__home`}>
                    <div className={"view-container"}>
                        {/* stretch goal: design a carousel to live above the toast */}
                        <p className="toast">{toast}</p>
                        { tabs.length && (
                            tabs.map((tab, index) =>
                                {
                                    return (<Tab category={tab} key={index} />);
                                }
                            )
                        )}
                        <hr />
                        { props?.activeTab === props.tabIndex && (
                            <Grid category={props.category} />
                        )}
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
    activeImage: state.activeImage,
    activeTab: state.activeTab
}))(Home);