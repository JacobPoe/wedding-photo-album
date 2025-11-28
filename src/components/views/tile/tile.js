import React from "react";

import './tile.css';

const maximizeImage = (id) => {
    // open an image with ID props.id in a modal to view full-sized
    alert(`todo: open modal for fullsize image\nid: ${id}`);
}

const Tile = (props) => {
    return (
        <>
            <img id={props.id} className={`tile tile__${props.id}`} src={props.url} alt={props.alt} onClick={() => maximizeImage(props.id)} />
        </>
    );
};

export default Tile;