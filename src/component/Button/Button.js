import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Button = (props) => {
    return (
        <>
            <a href={props.link} className={`c-button-1 ${props.secondary && "secondary"}`}>
                <span>
                    {props.secondary || <FontAwesomeIcon icon={faBook} />} {props.text}
                </span>
            </a>
        </>
    );
};

export default Button;
