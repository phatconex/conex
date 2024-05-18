import React from "react";
import Headline from "../Headline/Headline";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const Register = () => {
    async function postData(data) {
        const formData = new FormData();
        formData.append("entry.396816717", data.fullname);
        formData.append("entry.348467764", data.phone);
        formData.append("entry.1689719515", data.email);
        formData.append("entry.1324529444", data.course);
        formData.append("entry.987275549", data.note);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLScdu_WPp_KF99h_9U-BOLGF9qXIB7l3sbyVrGmUweWcDepDVA/formResponse", {
            method: "POST",
            body: formData,
            mode: "no-cors",
        });
    }

    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            email: "",
            course: "Đăng ký học thử",
            note: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Bạn chưa nhập tên"),
            phone: Yup.string()
                .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ")
                .required("Bạn chưa nhập số điện thoại"),
            email: Yup.string().email("Email chưa đúng chuẩn").required("Bạn chưa nhập email"),
        }),
        onSubmit: (values, { resetForm }) => {
            postData(values);
            toast.success("Đăng ký thành công !", {
                position: "top-center",
                autoClose: 2000,
            });

            // Reset form values
            resetForm();

            // Cuộn lên đầu trang
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 2800);
        },
    });
    return (
        <div className="register">
            <Container>
                <Headline
                    sub="Học thử"
                    title={
                        <>
                            Đăng ký học thử <span>(FREE)</span>
                        </>
                    }
                    desc="Nếu bạn muốn trải nghiệm 1 buổi học thử FREE tại conex do mình giảng dạy hoặc đơn giản bạn muốn được định hướng nghề nghiệp thì đừng ngần ngại điền vào form phía dưới nhé"
                ></Headline>
                <div className="register-box">
                    <Row>
                        <Col lg={5} id="lien-he">
                            <div className="register-left">
                                <img src={logo} alt="logo-conex" className="register-logo" />
                                <h3 className="register-title">Thông tin liên hệ</h3>
                                <ul className="register-info">
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} /> <span>0933 676 103 (ZALO)</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} /> <span>huynhlamtanphat@gmail.com</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faMapPin} /> <span>TP.Hồ Chí Minh</span>
                                    </li>
                                </ul>
                                <div className="register-social">
                                    <a href="https://www.facebook.com/conexfrontend" target="_blank">
                                        <FontAwesomeIcon icon={faSquareFacebook} /> Fanpage Conex
                                    </a>
                                    <a href="https://www.facebook.com/groups/donglaptrinhconex" target="_blank">
                                        <FontAwesomeIcon icon={faSquareFacebook} /> Group tự học miễn phí
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCHmvvamvQdlyvz-HeLIylvw" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} /> Kênh youtube tự học
                                    </a>
                                    <a href="https://www.tiktok.com/@hltpat" target="_blank">
                                        <FontAwesomeIcon icon={faTiktok} /> Kênh tiktok tự học
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} id="hoc-thu">
                            <form onSubmit={formik.handleSubmit} className="register-form">
                                <Row>
                                    <Col lg={6}>
                                        <div className="register-input-box">
                                            <label htmlFor="fullname">Tên của bạn</label>
                                            <input
                                                type="text"
                                                name="fullname"
                                                placeholder="Nhập tên của bạn"
                                                value={formik.values.fullname}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.fullname && formik.errors.fullname ? (
                                                <div className="error">{formik.errors.fullname}</div>
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="register-input-box">
                                            <label htmlFor="phone">Số điện thoại</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Nhập số điện thoại"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
                                        </div>
                                    </Col>
                                </Row>
                                <div className="register-input-box">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Nhập email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                                </div>
                                <div className="register-input-box">
                                    <label htmlFor="note">Lời nhắn tới conex</label>
                                    <textarea
                                        rows="3"
                                        name="note"
                                        placeholder="Bạn có khó khăn, thắc mắc gì có thể ghi ở đây nhé"
                                        value={formik.values.note}
                                        onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit">Đăng ký ngay</button>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Register;
