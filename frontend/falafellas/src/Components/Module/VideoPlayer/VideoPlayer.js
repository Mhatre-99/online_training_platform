import React, {useEffect, useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import ReactPlayer from 'react-player';
import SidePanel from "./SidePanel";
import "../module.css";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import api from "../../../baseUrl";


export default function VideoPlayer({content, moduleId, callbackSidePanel}){
    const [url, setUrl] = useState("https://www.youtube.com/watch?v=hZEc4jD0q2c");
    const [descriptionText, setDescriptionText] = useState("Description");
    const [videoName, setVideoName] = useState("Video Name");
    const location = useLocation();
    const navigate = useNavigate();
    const {videoId} = useParams();
    const contentData = {content};
    console.log("CONtent ID ",videoId);
    useEffect(() => {
        const item = contentData.content.find(item => item._id === videoId);
        console.log("Item ", item);
        setDescriptionText(item.description);
        setVideoName(item.title);
    }, [videoId]);


    return (
        <>
            <Container className="video-title-container">
            <div className="video-name">
                {videoName}
            </div>
        </Container>
        <Container className="video-player-container">

            <Row>
                <Col sm={8} className="video-player-content">
                    <Row className="video-player-row">
                        <div>
                            <ReactPlayer url={url} controls width="100%"/>
                        </div>
                    </Row>
                    <Row className="video-description">

                            <div className="video-description-title">
                                Lecture Description
                            </div>
                            <div className="video-description-des">
                                {descriptionText}
                            </div>

                    </Row>
                </Col>
                <Col sm={4} className="video-module-content">
                    {contentData.content.map((item) => (
                        <SidePanel key={item._id} id={item._id} item={item} moduleId = {moduleId} handleOnClickSidePanel={() => callbackSidePanel(item._id)}/>
                ))}
                </Col>

            </Row>
        </Container>
        </>

    )
}