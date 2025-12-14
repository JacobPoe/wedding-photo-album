import React from 'react';

import './select.css';

const Select = (props) => {
    const onOptionClick = (event) => {
        props.callbackFn(event.target.value);
    }

    return (
        <>
            <label className="sr-only" htmlFor={`select__${props.id}`}></label>
            <select
                name={`select__${props.id}`}
                id={`select__${props.id}`}
                className={`select select__${props.id}`}
                required={props.required || true}
                onChange={(e) => onOptionClick(e)}
            >
                { props.opts.map((opt, index) => {
                    return (
                        <option
                            key={index}
                            value={opt}
                        >
                                {opt}
                        </option>
                    )
                })}
            </select>
        </>
    )
}

export default Select;
