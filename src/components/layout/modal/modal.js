import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/set-active-image";
import Button from "../../controls/button/button";

import './modal.css';

const Modal = (props) => {
    const [source, setSource] = useState('');

    const closeModal = () => {
        props.dispatch(setActiveImage(null))
    }

    useEffect(() => {
        setSource(`/assets/fullsize/${props.activeImage.name}`);
    }, [])

    return (
        <>
            <div className="modal-backdrop" onClick={() => closeModal()}></div>
            <div className="modal-content">
                <div className="modal-close">
                    <Button id={`modal-close__${props.activeImage.id}`} type="close" onClickHandler={closeModal} />
                </div>
                <img src={source} alt="Modal" />
            </div>
        </>
    )
}

export default connect((state) => ({
    activeImage: state.album.activeImage
}))(Modal);