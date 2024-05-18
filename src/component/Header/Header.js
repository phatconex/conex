import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    const iconRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!menuRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <Container>
            <div className="header">
                <div className="header-logo">
                    <img src={logo} alt="logo-conex" />
                </div>

                <ul className={`header-menu ${showMenu && "active"}`} ref={menuRef}>
                    <li style={{ "--delay": "0.1s" }}>
                        <a onClick={() => setShowMenu(false)} href="#khoa-hoc">
                            Khóa học
                        </a>
                    </li>
                    <li style={{ "--delay": "0.2s" }}>
                        <a onClick={() => setShowMenu(false)} href="#do-an">
                            Đồ án
                        </a>
                    </li>
                    <li style={{ "--delay": "0.3s" }}>
                        <a onClick={() => setShowMenu(false)} href="#danh-gia">
                            Đánh giá
                        </a>
                    </li>
                    <li style={{ "--delay": "0.4s" }}>
                        <a onClick={() => setShowMenu(false)} href="#giang-vien">
                            Giảng viên
                        </a>
                    </li>
                    <li style={{ "--delay": "0.5s" }}>
                        <a onClick={() => setShowMenu(false)} href="#lien-he">
                            Liên hệ
                        </a>
                    </li>
                    <li style={{ "--delay": "0.6s" }}>
                        <a onClick={() => setShowMenu(false)} href="#hoc-thu">
                            Học thử
                        </a>
                    </li>
                </ul>
                <div className="header-button">
                    <Button text="Các khóa học" link="#khoa-hoc"></Button>
                    <button className={`header-button-menu ${showMenu && "active"}`} ref={iconRef} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Header;
