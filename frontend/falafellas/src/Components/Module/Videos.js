import Container from "react-bootstrap/esm/Container";
import Video from "./Video";
import {useEffect, useState} from "react";
import "./module.css"

/*const data = [{
    title: "What is Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    status: "Complete",
    time: "10 mins",
    questions: "",
    type:""},

    {
        title: "Why is Lorem Ipsum",
        description: " Lorem Ipsum has been the industry's quote. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        status: "Incomplete",
        time: "5 mins",
        questions: "",
        type:""},

    {
        title: "Quiz 1",
        description: " What is Lorem Ipsum",
        status: "Incomplete",
        time: "5 mins",
        questions: "10 Questions",
        type:"MCQs"
    }
]*/

export default function Videos({videos, quizzes , checkBox}) {

    const [data, setData] = useState([]);
    const mergedData = (videos || []).concat(quizzes || []);
    useEffect(() => {
        let newMergedData = [];
        mergedData.forEach(function(data){
            const newData = {
                title: data.name || "",
                description: data.description || " ",
                status: data.status || "Incomplete",
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




    return(

        <Container fluid className="video-frame">
            {data.filter(function(data){
                console.log("check video ",checkBox.video);
                console.log("check quiz ",checkBox.quiz);
                console.log("check status ",checkBox.status);
                if(!(checkBox.video || checkBox.quiz || checkBox.status)){
                    return data;
                }else{

                    if(data.contentType==="video"){
                        if(checkBox.video){
                            return data;
                        }
                    }
                    else if(data.contentType==="quiz"){
                        if(checkBox.quiz){
                            return data;
                        }
                    }
                    if(data.status === "Incomplete"){
                        if(checkBox.status){
                            return data;
                        }
                    }

                }
                return null;
            } ).map(function(data) {
                console.log("rendering");
                return (

                    <Video data={data}/>

                )})
            }
    </Container>
   
    )
}