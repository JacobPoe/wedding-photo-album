import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { buildTileMeta, loadAssets } from "../../../services/asset.service";
import { setAssets } from "../../../state/actions/set-assets";

import Tile from "../tile/tile";
import './grid.css';

const Grid = (props) => {
    const [tiles, setTiles] = useState([]);

    const loadTab = async () => {
        await loadAssets(props.activeTab.category)
            .then((res) => {
                props.dispatch(setAssets({
                    files: res.files,
                    ...props.activeTab
                })
            )
            const tilesMeta = buildTileMeta(props.activeTab.category, props.directories[props.activeTab.category]);
            setTiles(tilesMeta);
        })
    }

    useEffect(() => {
        loadTab();
    }, [props.activeTab])

    return (
        <div className="grid" id="grid">
            {
                tiles.map((image, key) =>
                    <Tile
                        id={`tile_${key}`}
                        name={image.name}
                        url={image.url}
                        key={key}
                        tabIndex={key + 1}
                    />)
            }
        </div>
    )
}

export default connect((state) => ({
    activeTab: state.navigation.activeTab,
    directories: state.album.directories
}))(Grid);
