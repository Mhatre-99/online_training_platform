import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Routes, Route, useParams, useLocation, useNavigate} from "react-router-dom";
import Videos from "./Videos";
import "./module.css";
import api from "../../baseUrl";
import {useEffect, useState} from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

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
    const location = useLocation();
    const checkBox = {video: video, quiz: quiz, status: status};
    const navigate = useNavigate();
    const callback = (value) => {
        console.log("value " + value);

        if (value === "video-box") {
            setVideo(!video);
            //console.log(video);
        } else if (value === "quiz-box") {
            setQuiz(!quiz);
            //console.log(quiz);
        } else if (value === "incomplete-box") {
            setStatus(!status);
            //console.log(status);
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

    const [data, setData] = useState([]);
    const mergedData = (videos || []).concat(quizzes || []);
    useEffect(() => {
        let newMergedData = [];
        mergedData.forEach(function(data){
            const newData = {
                _id: data._id,
                title: data.name || "",
                description: data.description || " ",
                status: data.status || "Incomplete",
                drive_url:data.drive_url || "",
                time: data.time_limit? data.time_limit : data.duration,
                questions: data.questions ? data.questions.length : "",
                type: data.questions ? "quiz" : "video",
                contentType: data.questions ? "quiz" : "video"
            }
            newMergedData.push(newData);
        })
        setData(newMergedData);
        console.log("data",data);
    }, [videos, quizzes]);

    function call(videoId){
        navigate(`/module/${id}/video/${videoId}`)
    }

    const isVideoPath = location.pathname.includes("/video/");

    return (
        <>
            {!isVideoPath &&  <Container className="course-title-container course-title">
                <Row className="course-name ">
                    {title}
                </Row>
                <Row className="course-description">
                    {description}
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

            </Container>}
            <Routes>
                <Route path="/" element={<Videos mdata = {data} videos = {videos} quizzes = {quizzes} checkBox={checkBox} />}/>
                <Route path="video/:videoId" element={<VideoPlayer content={data} moduleId = {id} callbackSidePanel={(videoId)=>call(videoId)}/>}/>
            </Routes>
    </>
    )
}