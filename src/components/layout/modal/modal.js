import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/active-image";
import Button from "../../controls/button/button";

import './modal.css';

const Modal = (props) => {
    const closeModal = () => {
        props.dispatch(setActiveImage(null))
    }

    return (
        <>
            <div className="modal-backdrop" onClick={() => closeModal()}></div>
            <div className="modal-content">
                <div className="modal-close">
                    <Button id={`modal-close__${props.activeImage.id}`} type="close" onClickHandler={closeModal} />
                </div>
                <img src={props.activeImage.url} alt="Modal" />
            </div>
        </>
    )
}

export default connect((state) => ({
    activeImage: state.activeImage
}))(Modal);