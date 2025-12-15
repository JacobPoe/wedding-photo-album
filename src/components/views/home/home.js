import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../views-base.css";
import "./home.css";

import config from "../../../../site.config";
import { loadDirectories } from "../../../services/asset.service";

import Footer from "../../layout/footer/footer";
import Header from "../header/header";
import Grid from "../../layout/grid/grid";
import Modal from "../../layout/modal/modal";
import Tab from "../../layout/tab/tab";

import { setActiveTab } from "../../../state/actions/set-active-tab";
import { setDirectories } from "../../../state/actions/set-directories";
import { setBatchSize } from "../../../state/actions/set-batch-size";

const TOAST = config.text.home.toast;
const BATCH_SIZE = config.navigation.batchSize

const Home = (props) => {

    const [gridReady, setGridReady] = useState(false);
    const [tabs, setTabs] = useState([]);

    const loadTabs = async () => {
        props.dispatch(setBatchSize(BATCH_SIZE));
        // Stretch goal: query url for a param which sets the default url at load
        await loadDirectories().then((directories) => {
            props.dispatch(setDirectories(directories));
            props.dispatch(setActiveTab({
                index: 0,
                category: directories[0],
                offset: 0
            }));

            setTabs(directories);
        });
    }
    useEffect(() => {
      loadTabs()
          .then(() => {
            setGridReady(true);
         })
    }, []);

    return (
        <>
            <div className="dark-mode">
                <Header />
                <div className={`view view__home`}>
                    <div className={"view-container"}>
                        {/* stretch goal: design a carousel to live above the toast */}
                        <p className="toast">{TOAST}</p>
                        { tabs.length && (
                            tabs.map((tab, index) =>
                                {
                                    return (<Tab category={tab} index={index} key={index} />);
                                }
                            )
                        )}
                        <hr />
                        { gridReady && (
                            <Grid batchSize={BATCH_SIZE} />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
            { props.activeImage && props.activeImage.name && (
                <Modal />
            )}
        </>
    )
}

export default connect((state) => ({
    activeImage: state.album.activeImage
}))(Home);