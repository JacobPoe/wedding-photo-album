import React, { useState, useEffect } from "react";

import { buildTileMeta, loadAssets } from "../../../services/asset.service";

import Tile from "../tile/tile";

import './grid.css';

const Grid = () => {
    const [tiles, setTiles] = useState([]);
    const loadImages = async () => {
        const assets = await loadAssets(0, 25);

        const tilesMeta = buildTileMeta(assets.files);
        setTiles(tilesMeta);
    }

    useEffect(() => {
        loadImages();
    }, [tiles])

    return (
        <div className="grid" id="grid">
            {
                tiles.map((image, key) => <Tile id={`tile_${key}`} key={key} tabIndex={key + 1} url={image.url} />)
            }
        </div>
    )
}

export default Grid;