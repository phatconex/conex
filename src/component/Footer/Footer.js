import { faAngleUp, faCode, faDiagramProject, faUser, faPersonChalkboard, faAddressBook, faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="footer">
            <button className={`footer-scrolltop ${isVisible && "active"}`} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleUp} />
            </button>

            <div className={`footer-navigation ${isVisible && "active"}`}>
                <a href="#khoa-hoc">
                    <FontAwesomeIcon icon={faCode} /> <span>Khóa học</span>
                </a>
                <a href="#do-an">
                    <FontAwesomeIcon icon={faDiagramProject} /> <span>Đồ án</span>
                </a>
                <a href="#danh-gia">
                    <FontAwesomeIcon icon={faUser} /> <span>Đánh giá</span>
                </a>
                <a href="#giang-vien">
                    <FontAwesomeIcon icon={faPersonChalkboard} /> <span>Giảng viên</span>
                </a>
                <a href="#lien-he">
                    <FontAwesomeIcon icon={faAddressBook} /> <span>Liên hệ</span>
                </a>
                <a href="#hoc-thu">
                    <FontAwesomeIcon icon={faSquarePen} /> <span>Học thử</span>
                </a>
            </div>
        </div>
    );
};

export default Footer;
