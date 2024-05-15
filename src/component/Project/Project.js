import React, { useState } from "react";
import { Container, Modal, Row, Col } from "react-bootstrap";
import Headline from "../Headline/Headline";

import Button from "../Button/Button";
import dataProject from "./DataProject";
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
                    {dataProject.map(
                        (item) =>
                            item.special && (
                                <a href={item.link} target="_blank" className="project-item" key={item.id}>
                                    <img src={item.img} alt={item.name} />
                                    <div className="project-item-info">
                                        <h3>{item.name}</h3>
                                        <p>Khóa: {item.course}</p>
                                    </div>
                                </a>
                            )
                    )}
                </div>
                <div className="text-center mt-3" onClick={handleShow}>
                    <Button text="Xem tất cả project" link="javascript:;"></Button>
                </div>
                <Modal show={show} onHide={handleClose} size="xl" centered>
                    <div className="modal-close" onClick={handleClose}>
                        X
                    </div>
                    <Modal.Header closeButton>
                        <Modal.Title>CÁC PROJECT CỦA HỌC VIÊN CONEX</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            {dataProject.map((item) => (
                                <Col lg={4}>
                                    <a href={item.link} target="_blank" className="card-project" key={item.id}>
                                        <img src={item.img} alt={item.name} />

                                        <h3>{item.name}</h3>
                                        <p>Khóa: {item.course}</p>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Project;
