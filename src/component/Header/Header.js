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
                    <li style={{ "--delay": "0.2s" }}>
                        <a href="">Khóa học</a>
                    </li>
                    <li style={{ "--delay": "0.3s" }}>
                        <a href="">Học thử</a>
                    </li>
                    <li style={{ "--delay": "0.4s" }}>
                        <a href="">Đồ án</a>
                    </li>
                    <li style={{ "--delay": "0.5s" }}>
                        <a href="">Về Conex</a>
                    </li>
                    <li style={{ "--delay": "0.6s" }}>
                        <a href="">Giảng viên</a>
                    </li>
                    <li style={{ "--delay": "0.7s" }}>
                        <a href="">Đánh giá</a>
                    </li>
                </ul>
                <div className="header-button">
                    <Button text="Các khóa học"></Button>
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
