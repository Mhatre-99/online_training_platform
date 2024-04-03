import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import api from "../../baseUrl";


const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the API
    api.get('/courses/get/all')
      .then(response => {
        setCourses(response.data.courses);
        console.log(response.data.courses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <main className="container mt-5">
      <header>
        <h1 className="mb-4">Courses</h1>
      </header>
      <section className="row">
        {courses && courses.map(course => (
          <article className="col-md-6" key={course._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">{course.name}</h2>
                <p className="card-text">{course.description}</p>
                <p className="card-text">Tutor: {course.tutor}</p>
                <p className="card-text">Deadline: {course.deadline}</p>
                <button className="btn btn-primary">View Modules</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CoursesPage;
