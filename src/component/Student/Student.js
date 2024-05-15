import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import Headline from "../Headline/Headline";

const Student = () => {
    const feedbackImages = useMemo(() => {
        const images = [];
        for (let i = 1; i <= 9; i++) {
            images.push(require(`../../assets/student/${i}.png`));
        }
        return images;
    }, []);

    const [highlightedIndex, setHighlightedIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHighlightedIndex(index);
    };

    const handleMouseOut = () => {
        setHighlightedIndex(null);
    };

    return (
        <div className="student">
            <Container>
                <Headline
                    sub="Đánh giá"
                    title={
                        <>
                            Học viên <span>Conex</span> nói gì
                        </>
                    }
                    desc="Ở đây mình sẽ để những lời yêu thương của học viên CONEX nhé"
                ></Headline>

                <div className="student-list">
                    {feedbackImages.map((item, index) => (
                        <div
                            className={`student-item ${highlightedIndex === index ? "active" : ""}`}
                            key={index}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                        >
                            <img src={item} alt="feedback-student" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Student;
