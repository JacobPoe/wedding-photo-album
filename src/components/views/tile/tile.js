import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/active-image";

import './tile.css';

const Tile = (props) => {
    const maximizeImage = () => {
        props.dispatch(setActiveImage({id: props.id, url: props.url, alt: props.alt}));
    }

    return (
        <>
            <img id={props.id} className={`tile tile__${props.id}`} src={props.url} alt={props.alt} onClick={() => maximizeImage()} />
        </>
    );
};

export default connect((state) => ({
    activeImage: state.activeImage
}))(Tile);