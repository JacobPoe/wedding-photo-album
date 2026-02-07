import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setActiveImage } from "jake-compoenents/dist/state/actions/set-active-image";
import Button from "../../controls/button/button";

import config from "../../../../site.config";
import './modal.css';

const FULLSIZE_ASSET_URL = config.assets.fullsize.url;
const Modal = (props) => {
    const [source, setSource] = useState('');
    const closeModal = () => {
        props.dispatch(setActiveImage(null))
    }

    useEffect(() => {
        setSource(`${FULLSIZE_ASSET_URL}/${props.activeImage.name}`);
    }, [])

    return (
        <>
            <div className="modal-backdrop" onClick={() => closeModal()}></div>
            <div className="modal-content">
                <Button id={`modal-close__${props.activeImage.id}`} type="close" onClickHandler={closeModal} />
                <img className={"modal-image"} src={props.activeImage.url} alt="Modal" />
                📷 Click <a href={source} target="_blank">here</a> for the full-resolution version.
            </div>
        </>
    )
}

export default connect((state) => ({
    activeImage: state.album.activeImage
}))(Modal);