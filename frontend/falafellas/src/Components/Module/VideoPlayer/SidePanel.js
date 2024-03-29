import React from "react";
import {Row,Col} from "react-bootstrap";
import thumbnail from "../../../assets/Module/videothumbnail.png";
import {useNavigate} from "react-router-dom";

export default function SidePanel({item, id, moduleId, handleOnClickSidePanel}){
    const navigate = useNavigate();
    const content = {item};
    console.log(content);
    console.log("module id ", moduleId);
    /*function handleOnClick(){
        navigate(`/module/${moduleId}/video/${id}`)
    }*/

    return(
        <div>
            <Row className="sidepanel-row" onClick={()=>handleOnClickSidePanel(id)}>
                <Col sm={5}>
                    <img src={thumbnail} alt="thumbnail" className="thumbnail" style={{ height: '5rem', width:"100%"}}></img>
                </Col>
                <Col>
                    <Row>{`${content.item.title}`}</Row>
                    <Row>{`${content.item.time} mins`}</Row>
                </Col>
            </Row>
        </div>
    )
}