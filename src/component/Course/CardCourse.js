import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import img_course from "../../assets/course/course-1.png";
import { Modal, Accordion } from "react-bootstrap";
import Headline from "../Headline/Headline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const CardCourse = ({ name, desc, time, timeLine, price }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            course: name,
            note: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Bạn chưa nhập tên"),
            phone: Yup.string()
                .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ")
                .required("Bạn chưa nhập số điện thoại"),
            email: Yup.string().email("Email chưa đúng chuẩn").required("Bạn chưa nhập email"),
        }),
        onSubmit: (values) => {
            postData(values);
            toast.success("Đăng ký thành công !", {
                position: "top-center",
                autoClose: 2000,
            });
            setShow(false);
        },
    });
    return (
        <>
            <div className="card-course" onClick={handleShow}>
                <div className="card-course-top">
                    <img src={img_course} alt="" />
                    <div className="card-course-info">
                        <p>{desc}</p>
                        <p>01</p>
                    </div>
                </div>
                <div className="card-course-title">
                    <h3>{name}</h3>
                    <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <div>Xem lộ trình chi tiết</div>
                    </span>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="md" centered>
                <Headline
                    sub="Lộ trình"
                    title={
                        <>
                            Lộ trình khóa học <span>{name}</span>
                        </>
                    }
                ></Headline>
                <div className="modal-info">
                    <div>
                        <span>Thời lượng:</span> <span>{time}</span>
                    </div>
                    <div>
                        <span>Hình thức:</span> <span>OFFLINE/ONLINE</span>
                    </div>
                    <div>
                        <span>Học phí:</span> <span>{price}</span>
                    </div>
                </div>
                <Accordion>
                    {timeLine.map((item, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                                {item.title} <span>{item.time}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="modal-headline">Lý thuyết</h4>
                                <ul className="modal-list">
                                    {item.lyThuyet.map((lythuyet, index) => (
                                        <li key={index}>- {lythuyet}</li>
                                    ))}
                                </ul>
                                <h4 className="modal-headline">Bài tập</h4>
                                <ul className="modal-list">
                                    {item.baiTap.map((baitap, index) => (
                                        <li key={index}>- {baitap}</li>
                                    ))}
                                </ul>
                                <div className="modal-total">
                                    {item.toTal.map((total, index) => (
                                        <span key={index}>{total}</span>
                                    ))}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="modal-register">
                    <h3>Đăng ký tư vấn</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" name="fullname" placeholder="Tên của bạn (*)" onChange={formik.handleChange} />
                        {formik.touched.fullname && formik.errors.fullname ? <div className="error">{formik.errors.fullname}</div> : null}
                        <input type="text" name="phone" placeholder="Số điện thoại (*)" onChange={formik.handleChange} />
                        {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
                        <input type="text" name="email" placeholder="Email (*)" onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                        <input type="hidden" name="course" value={name} />
                        <textarea name="note" rows="10" onChange={formik.handleChange} placeholder="Câu hỏi / lời nhắn tới conex"></textarea>
                        <button type="submit">Đăng ký</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default CardCourse;
