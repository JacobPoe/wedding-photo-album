import React from "react";

import Tile from "../tile/tile";

import './grid.css';

const Grid = (props) => {
    return (
        <div className="grid" id="grid">
            {
                props.images.map((image, key) => <Tile id={image.id} key={key} url={image.url} alt={image.alt} />)
            }
        </div>
    )
}

export default Grid;