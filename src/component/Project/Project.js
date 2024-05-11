import React, { useState } from "react";
import { Container, Modal, Row, Col } from "react-bootstrap";
import Headline from "../Headline/Headline";
import project from "../../assets/project/project-1.png";
import project2 from "../../assets/project/project-2.png";
import Button from "../Button/Button";
const Project = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="project">
            <Container>
                <Headline
                    sub="Đồ án"
                    title={
                        <>
                            Học viên <span>Conex</span> làm nè
                        </>
                    }
                    desc="Những project mà các học viên của CONEX đã thực hiện"
                ></Headline>
                <div className="project-list">
                    <a href="https://react-jewelry.vercel.app/" target="_blank" className="project-item">
                        <img src={project} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>
                    <a href="" target="_blank" className="project-item">
                        <img src={project2} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>
                    <a href="" className="project-item">
                        <img src={project2} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>
                    <a href="" className="project-item">
                        <img src={project} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>
                    <a href="" className="project-item">
                        <img src={project} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>

                    <a href="" className="project-item">
                        <img src={project2} alt="project" />
                        <div className="project-item-info">
                            <h3>Project phim</h3>
                            <p>Khóa: Frontend newbie</p>
                        </div>
                    </a>
                </div>
                <div className="text-center mt-3" onClick={handleShow}>
                    <Button text="Xem tất cả project" link="javascript:;"></Button>
                </div>
                <Modal show={show} onHide={handleClose} size="xl" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>CÁC PROJECT CỦA HỌC VIÊN CONEX</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col lg={4}>
                                <a href="" className="card-project">
                                    <img src={project2} alt="project" />
                                    <h3>Project phim</h3>
                                    <p>Khóa: Frontend newbie</p>
                                </a>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Project;
