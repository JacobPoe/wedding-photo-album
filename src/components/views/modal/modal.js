import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/active-image";

import './modal.css';

const Modal = (props) => {
    const closeModal = () => {
        props.dispatch(setActiveImage(null))
    }

    return (
        <>
            <div className="modal-backdrop" onClick={() => closeModal()}></div>
            <div className="modal-content">
                <img src={props.activeImage.url} alt="Modal" />
            </div>
        </>
    )
}

export default connect((state) => ({
    activeImage: state.activeImage
}))(Modal);