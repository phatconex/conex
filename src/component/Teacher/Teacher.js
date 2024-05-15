import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Headline from "../Headline/Headline";
import star from "../../assets/teacher/star.png";
const Teacher = () => {
    const elementSpan1 = [];
    const elementSpan2 = [];
    for (let i = 0; i < 100; i++) {
        elementSpan1.push(
            <span key={i}>
                <img src={star} alt="star-conex" />
                Huỳnh Lâm Tấn Phát
            </span>
        );
        elementSpan2.push(
            <span key={i}>
                <img src={star} alt="star-conex" />
                Frontend Developer
            </span>
        );
    }
    return (
        <div className="teacher" id="giang-vien">
            <Container>
                <Headline
                    sub="Giảng viên"
                    title={
                        <>
                            Giảng viên <span>Conex</span> là ai
                        </>
                    }
                    desc="Mình là Phát, là Founder Conex, mình tốt nghiệp KHTN, có 5 năm kinh nghiệm lập trình Frontend và hơn 2 năm giảng dạy Frontend tại các trung tâm dạy lập trình"
                ></Headline>
                <div className="teacher-box">
                    <div className="teacher-list">
                        <div className="teacher-item" style={{ "--top": "-50px", "--left": "30%", "--delay": "0.2s" }}>
                            <span>5 năm kinh nghiệm Frontend</span>
                        </div>
                        <div className="teacher-item" style={{ "--top": "15%", "--left": "18%", "--delay": "0.3s" }}>
                            <span>Chứng chỉ nghiệp vụ sư phạm HCEM </span>
                        </div>
                        <div className="teacher-item" style={{ "--top": "-30px", "--left": "70%", "--delay": "0.4s" }}>
                            <span>2 năm kinh nghiệm giảng dạy</span>
                        </div>
                        <div className="teacher-item" style={{ "--top": "16%", "--left": "65%", "--delay": "0.6s" }}>
                            <span>Giảng viên Green Academy</span>
                        </div>
                        <div className="teacher-item" style={{ "--top": "80%", "--left": "18%", "--delay": "0.8s" }}>
                            <span>Code hơn 200 project thực tế</span>
                        </div>
                        <div className="teacher-item" style={{ "--top": "80%", "--left": "68%", "--delay": "1s" }}>
                            <span>Tốt nghiệp Khoa Học Tự Nhiên</span>
                        </div>
                    </div>
                    <div className="teacher-thumb">
                        <img
                            src="https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/343516696_2241864546005759_7230244519370495171_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v_b4vpwW1dYQ7kNvgEgcwyY&_nc_ht=scontent.fhan4-6.fna&oh=00_AYABJuwoloOAPhRw7eI5yfChuQKhYi7kFHFuNw7ezbs_Ow&oe=66449F34"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
            <div className="teacher-info">
                <div className="teacher-info-slide">{elementSpan1}</div>
                <div className="teacher-info-slide secondary">{elementSpan2}</div>
            </div>
        </div>
    );
};

export default Teacher;
