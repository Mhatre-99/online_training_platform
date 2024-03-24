import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import thumbnail from "../../assets/Module/videothumbnail.png";

export default function Video({data}) {
    
    
    return (
        <Container className="video">
            <Row className="justify-content-center video-row">
                <Col sm={3}>
                    
                        <img src={thumbnail} alt="thumbnail" className="thumbnail"></img>
                    
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