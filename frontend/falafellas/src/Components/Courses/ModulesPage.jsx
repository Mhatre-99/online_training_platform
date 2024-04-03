import React, { useState, useEffect } from 'react';
import api from "../../baseUrl";
import './CoursesPage.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ModulesPage = () => {
  const { courseId } = useParams();
  const [modules, setModules] = useState([]);
  const [courseTitle, setCourseTitle] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchModules = async () => {
      try {
        const courseResponse = await api.get(`/courses/get/${courseId}`);
        const moduleIds = courseResponse.data.course.modules;
        console.log(moduleIds);
        const moduleRequests = moduleIds.map(moduleId => api.get(`/module/get/${moduleId}`));
        const moduleResponses = await Promise.all(moduleRequests);
        const modulesData = moduleResponses.map(response => response.data.module);
        setModules(modulesData);
        setCourseTitle(courseResponse.data.course.name);
        console.log(modulesData);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, [courseId]);

  const handleClick = (moduleId) => {
    navigate(`/module/${moduleId}`); 
  };

  const shortenDescription = (description) => {
    if (description.length > 120) {
      return description.substring(0, 120) + '...';
    }
    return description;
  };

  return (
    <main className="container mt-5">
      <header className="text-center">
        <h1 className="mb-4 heading">Modules for {courseTitle}</h1>
      </header>
      <section className="row">
        {modules.map(module => (
          <article className="col-md-6" key={module._id}>
            <section className="card mb-4">
              <section className="card-body d-flex flex-column">
                <h2 className="card-title mb-2 text-center">{module.title}</h2>
                <br />
                <p className="card-text mb-2">
                  <b className="font-weight-bold">Description:</b> {shortenDescription(module.description)}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-2">
                    <b className="font-weight-bold">Reward Points:</b> {module.reward_points}
                    </p>
                    <button className="btn modulesButton" onClick={() => handleClick(module._id)}>Know more</button>


                </div>

                
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text mb-0">
                    {/* <b className="font-weight-bold">Module Status:</b> {module.opened ? 'Opened' : 'Not Opened'} */}
                  </p>
                </div>
              </section>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ModulesPage;
