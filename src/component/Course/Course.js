import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Headline from "../Headline/Headline";
import CardCourse from "./CardCourse";
import arrDataCourse from "./datacourse";
const Course = () => {
    return (
        <Container>
            <Headline
                sub="Khóa học"
                title={
                    <>
                        Khóa học tại <span>Conex</span>
                    </>
                }
                desc="Ở Conex chúng mình mang đến cho các bạn các khóa học lập trình thực chiến và lượng bài tập nhiều"
            ></Headline>

            <Row>
                {arrDataCourse.map((item) => (
                    <Col lg={6} key={item.id}>
                        <CardCourse name={item.name} desc={item.desc} time={item.time} timeLine={item.timeline} price={item.price}></CardCourse>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Course;
