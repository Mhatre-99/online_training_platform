import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Routes, Route, useParams} from "react-router-dom";
import Videos from "./Videos";
import "./module.css";
import api from "../../baseUrl";
import {useEffect, useState} from "react";

export default function ModuleTitle() {

    const [moduleData, setModuleData] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videos, setVideos] = useState();
    const [quizzes, setQuizzes] = useState([]);
    const {id} = useParams()
    const [video, setVideo] = useState(false);
    const [quiz, setQuiz] = useState(false);
    const [status, setStatus] = useState(false);
    const checkBox = {video: video, quiz: quiz, status: status};
    const callback = (value) => {
        console.log("value " + value);

        if (value === "video-box") {
            setVideo(!video);
            console.log(video);
        } else if (value === "quiz-box") {
            setQuiz(!quiz);
            console.log(quiz);
        } else if (value === "incomplete-box") {
            setStatus(!status);
            console.log(status);
        }
    }
    useEffect(() => {
        api.get(`/module/get/${id}`).then(res =>{
            const response = res.data;
            setModuleData(response);
            setTitle(response.module.title);
            setDescription(response.module.description);
            setVideos(response.module.videos);
            console.log(response);
            setVideos(response.videos);
            setQuizzes(response.quizzes);
        }).catch( error => {
            console.log(error);
        })

    }, [id]);


    return (
        <>
            <Container className="course-title-container course-title">
                <Row className="course-name ">
                    Lorem Ipsum
                </Row>
                <Row className="course-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </Row>
                <Row className='filter-tabs '>
                    <Col className="filter">
                        Home
                    </Col>
                    <Col className="filter">
                <span className="check-box">
                    <input type="checkbox" name="video-box" onChange={(e) => callback(e.target.name)}></input>
                </span>
                        <span>
                    Video
                </span>
                    </Col>
                    <Col className="filter">
                <span className="check-box">
                    <input type="checkbox" name="quiz-box" onChange={(e) => callback(e.target.name)}></input>
                </span>
                        <span>
                    Quiz
                </span>
                    </Col>
                    <Col className="filter">
                <span className="check-box">
                    <input type="checkbox" name="incomplete-box" onChange={(e) => callback(e.target.name)}></input>
                </span>
                        <span>
                    Incomplete
                </span>
                    </Col>
                    <Col className="filter">

                        Module

                    </Col>
                </Row>

            </Container>
            <Routes>
                <Route path="/" element={<Videos videos = {videos} quizzes = {quizzes} checkBox={checkBox}/>}/>
            </Routes>
    </>
    )
}