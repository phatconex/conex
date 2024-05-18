import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headline from "../Headline/Headline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Student = () => {
    const feedbackImages = useMemo(() => {
        const images = [];
        for (let i = 10; i <= 14; i++) {
            images.push(require(`../../assets/student/${i}.png`));
        }
        return images;
    }, []);
    const feedbackImages2 = useMemo(() => {
        const images = [];
        for (let i = 15; i <= 18; i++) {
            images.push(require(`../../assets/student/${i}.png`));
        }
        return images;
    }, []);
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 10,
        verticalSwiping: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    vertical: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="student" id="danh-gia">
            <Container>
                <Row>
                    <Col lg={3}>
                        <Headline
                            sub="Đánh giá"
                            title={
                                <>
                                    Học viên <span>Conex</span> nói gì
                                </>
                            }
                            desc="Ở đây mình sẽ để những thành công, thành quả cũng như những bước chuyển mới của những học viên CONEX. Luôn cảm thấy vui và tự hào về các bạn, tự hào vì những cố gắng của các bạn nay đã có thành quả"
                        ></Headline>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col lg={6}>
                                <div className="student-list">
                                    <Slider {...settings}>
                                        {feedbackImages.map((item, index) => (
                                            <div className="student-item" key={index}>
                                                <img src={item} alt="feedback-student" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="student-list">
                                    <Slider {...settings} className="vertical-slider">
                                        {feedbackImages2.map((item, index) => (
                                            <div className="student-item" key={index}>
                                                <img src={item} alt="feedback-student" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Student;
