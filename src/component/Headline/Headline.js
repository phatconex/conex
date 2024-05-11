import React from "react";
import star from "../../assets/star-headline.png";
const Headline = ({ sub, title, desc }) => {
    return (
        <div className="headline">
            <div className="headline-top">
                <img src={star} alt="star-headline" />
                <span>{sub}</span>
            </div>
            <h2 className="headline-title">{title}</h2>
            <p className="headline-desc">{desc}</p>
        </div>
    );
};

export default Headline;
