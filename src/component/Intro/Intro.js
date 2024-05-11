import React from "react";
import { Container } from "react-bootstrap";
import star from "../../assets/star.png";
import Button from "../Button/Button";

const Intro = () => {
    return (
        <div className="intro">
            <Container>
                <div className="intro-box">
                    <div className="intro-welcome">
                        <img src={star} alt="icon-welcome" />
                        <h3>CHÀO MỪNG BẠN ĐẾN VỚI CONEX</h3>
                    </div>
                    <h1 className="intro-title">
                        Đào tạo <span>Front-End</span> <br /> từ ZERO đến HERO
                    </h1>
                    <p className="intro-desc">
                        CONEX không chỉ là nơi Đào tạo & Giảng dạy lập trình web mà còn là nơi định hướng phát triển tư duy về CNTT. 1 môi trường giúp
                        bạn phát triển các kĩ năng chuyên nghành và kĩ năng mềm
                    </p>
                    <div className="intro-button">
                        <Button text="Các khóa học"></Button>
                        <Button text="Đăng ký học thử" secondary={true}></Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Intro;
