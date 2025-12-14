import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { buildTileMeta, loadAssets } from "../../../services/asset.service";

import Tile from "../tile/tile";
import './grid.css';

const Grid = (props) => {
    const [tiles, setTiles] = useState([]);
    const loadImages = async () => {
        return await loadAssets(props.directories[props.activeTab])
    }

    useEffect(() => {
        loadImages().then((assets) => {
            const tilesMeta = buildTileMeta(props.directories[props.activeTab], assets.files);
            setTiles(tilesMeta);
        })
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
    activeTab: state.album.activeTab,
    directories: state.album.directories
}))(Grid);