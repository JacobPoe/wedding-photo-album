import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/set-active-image";

import './tile.css';

const Tile = (props) => {
    const maximizeImage = () => {
        props.dispatch(setActiveImage({id: props.id, url: props.url}));
    }

    return (
        <>
            <img id={props.id} tabIndex={props.tabIndex} className={`tile`} src={props.url} onClick={() => maximizeImage()} />
        </>
    );
};

export default connect((state) => ({
    activeImage: state.album.activeImage
}))(Tile);
