import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setActiveTab } from "jake-compoenents/dist/state/actions/set-active-tab";
import { setBatchSize } from "jake-compoenents/dist/state/actions/set-batch-size";
import { setDirectories } from "jake-compoenents/dist/state/actions/set-directories";

import Grid from "jake-compoenents/dist/components/layout/grid/grid"
import Modal from "jake-compoenents/dist/components/layout/modal/modal"
import TabMenu from "jake-compoenents/dist/components/layout/tabs/tabmenu/tabmenu"

import "../views-base.css";
import "./home.css";

import { buildTileMeta, loadAssets, loadDirectories } from "../../../services/asset.service";

import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";

import config from "../../../../site.config";
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
                <main className={`view view-container view__home`}>
                    {/* stretch goal: design a carousel to live above the toast */}
                    <p className="toast">{TOAST}</p>
                    <TabMenu tabs={tabs} />
                    { gridReady && (
                        <Grid
                            batchSize={BATCH_SIZE}
                            buildTileMetaCallback={buildTileMeta}
                            fetchContentCallback={loadAssets} />
                    )}
                </main>
                <Footer />
            </div>
            { props.activeImage && props.activeImage.name && (
                <Modal />
            )}
        </>
    )
}

export default connect((state) => ({
    activeImage: state.album.activeImage,
    activeTab: state.navigation.activeTab,
}))(Home);