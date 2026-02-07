import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "jake-compoenents/dist/state/actions/set-active-image";

import './tile.css';

const Tile = (props) => {
    const maximizeImage = () => {
        props.dispatch(
            setActiveImage({
                id: props.id,
                name: props.name,
                url: props.url
            })
        );
    }

    return (
        <>
            <img id={props.id} tabIndex={props.tabIndex} className={`tile`} src={props.url} onClick={() => maximizeImage()} />
        </>
    );
};

export default connect(() => ({}))(Tile);
