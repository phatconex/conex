import React from "react";
import Headline from "../Headline/Headline";

const Student = () => {
    return (
        <div>
            <Headline
                sub="Đánh giá"
                title={
                    <>
                        Học viên <span>Conex</span> nói gì
                    </>
                }
                desc="Ở đây mình sẽ để những lời yêu thương của học viên CONEX nhé"
            ></Headline>
        </div>
    );
};

export default Student;
