import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Course from "./component/Course/Course";
import Project from "./component/Project/Project";
import Student from "./component/Student/Student";
import Teacher from "./component/Teacher/Teacher";
import Register from "./component/Register/Register";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./scss/index.scss";
function App() {
    return (
        <>
            <Header></Header>
            <Intro></Intro>
            <Course></Course>
            <Project></Project>
            <Student></Student>
            <Teacher></Teacher>
            <Register></Register>
            <ToastContainer />
        </>
    );
}

export default App;
