import React from "react";

import "./button.css";

const Button = (props) => {
    const classes = ["btn"];
    if (props.className.length) {
        props.className?.forEach((className) => {
            classes.push(className);
        })
    }
    return (
        <>
            {props.label && (
                <label htmlFor={"button__" + props.id} className="button-label sr-only">
                    {props.label}
                </label>
            )}
            <button
                id={"button__" + props.id}
                onClick={props.onClickHandler}
                className={classes.join(" ")}
                type={props.type ? props.type : 'button'}
                >
                <span>{props.text}</span>
            </button>
        </>
    )
}

export default Button;