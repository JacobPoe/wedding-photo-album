import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { buildTileMeta, loadAssets } from "../../../services/asset.service";
import { paginate } from "../../../services/pagination.service";

import { setAssets } from "../../../state/actions/set-assets";
import { setBatchSize } from "../../../state/actions/set-batch-size";

import Tile from "../tile/tile";
import Button from "../../controls/button/button";
import Select from "../../controls/select/select";

import './grid.css';

const Grid = (props) => {
    const gridSizeOptions = [25, 50, 100, 200, 'all']
    const [tiles, setTiles] = useState([]);

    const fetchAssets = async () => {
        await loadAssets(props.activeTab.category)
            .then((res) => {
                props.dispatch(setAssets({
                    files: res.files,
                    ...props.activeTab
                })
            )
        })
    }

    const loadNewTiles = (direction) => {
       paginate({
           direction: direction,
           batchSize: props.batchSize,
           files: props.directories[props.activeTab.category]})
    }

    const updateGridSize = (val) => {
        let batchSize;
        if (val === 'all') {
            batchSize = -1;
        } else {
            batchSize = val;
        }
        props.dispatch(setBatchSize(batchSize));
    }

    useEffect(() => {
        const category = props.activeTab.category;
        const dir = props.directories[category];

        if (!dir || dir.length === 0) {
            fetchAssets();
        }
    }, [props.activeTab]);

    useEffect(() => {
        const category = props.activeTab.category;
        const dir = props.directories[category];

        if (dir && dir.length > 0) {
            const tilesMeta = buildTileMeta(category, dir);
            setTiles(tilesMeta);
        } else {
            setTiles([]);
        }
    }, [props.directories, props.activeTab]);

    return (
        <div className="grid" id="grid">
            <div className={`row grid__row grid__controls`}>
                <Select
                    id="gridsize"
                    initialValue={props.batchSize}
                    opts={gridSizeOptions}
                    callbackFn={(e) => updateGridSize(e)}
                />
                <span className="text-centered">
                    {(props.batchSize * props.activeTab.offset) + 1} - {(props.batchSize * props.activeTab.offset) + props.batchSize} of {props.directories[props.activeTab.category].length}
                </span>
                <div className={`grid__controls--nav`}>
                    <Button
                        id="prev"
                        label="Previous"
                        type="nav"
                        className={['button__nav', 'button__nav-prev', 'btn--secondary']}
                        text={'<'}
                        onClickHandler={() => loadNewTiles('prev')}
                    />
                    <Button
                        id="next"
                        label="Next"
                        type="nav"
                        className={['button__nav', 'button__nav-next', 'btn--secondary']}
                        text={'>'}
                        onClickHandler={() => loadNewTiles('next')}
                    />
                </div>

            </div>
            <div className="grid__tiles">
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
        </div>
    )
}

export default connect((state) => ({
    activeTab: state.navigation.activeTab,
    batchSize: state.navigation.batchSize,
    directories: state.album.directories
}))(Grid);
