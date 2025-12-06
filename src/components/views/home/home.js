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

import { setActiveTab } from "../../../state/actions/set-active-tab";
import { setAssetDirectories } from "../../../state/actions/set-asset-directories";

const toast = config.text.home.toast;

const Home = (props) => {
    const [gridReady, setGridReady] = useState(false);
    const [tabs, setTabs] = useState([]);

    const loadTabs = async () => {
        setGridReady(false);
        await loadDirectories().then((directories) => {
            props.dispatch(setAssetDirectories(directories));

            // Stretch goal: query url for a param which sets the default url at load
            props.dispatch(setActiveTab(0));

            const tabsMeta = buildTabMeta(directories);
            setTabs(tabsMeta);

            setGridReady(true);
        });
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
                                    return (<Tab category={tab} index={index} key={index} />);
                                }
                            )
                        )}
                        <hr />
                        { gridReady && (
                            <Grid />
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
    activeImage: state.album.activeImage
}))(Home);