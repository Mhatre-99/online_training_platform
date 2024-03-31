import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import thumbnail from "../../assets/Module/videothumbnail.png";
import {Route, Routes, useNavigate} from "react-router-dom";
import Videos from "./Videos";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export default function Video({data, moduleId}) {
    const videoData = {data};
    const navigate = useNavigate();
    const id = {data}.id;
    console.log("module id in video ", moduleId)
    function handleOnClick(e){
        navigate(`video/${videoData.data._id}`, { state: { contentID: videoData.data._id, moduleId:  moduleId.id} })
    }
    
    return (
        <Container className="video">
            <Row className="justify-content-center video-row">
                <Col sm={3}>
                    
                        <img src={thumbnail} alt="thumbnail" className="thumbnail" onClick={handleOnClick}></img>
                    
                </Col>
                
                <Col className="content-text" >
                    <div className="video-title">
                        {data.title}
                    </div>
                    <div className="video-des">
                           {data.description}
                    </div>
                    <div>
                    <Row>
                        <Col className="status">{data.status}</Col>
                        <Col className="content-info"> {data.time} mins</Col>
                        <Col className="content-info">{data.questions === "" ? "": "Questions"} {data.questions}</Col>
                        <Col className="content-info">{data.type}</Col>
                        </Row>
                    </div>

                </Col>
            </Row>

        </Container>
    )
}