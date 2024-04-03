import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from "../../baseUrl";
import './CoursesPage.css'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch courses from the API
    api.get('/courses/get/all')
      .then(response => {
        setCourses(response.data.courses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mt-5">
      <header className="text-center">
        <h1 className="mb-4 heading">Library</h1>
        <div className="search-bar text-center mb-4">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      <section className="row">
        {filteredCourses.map(course => (
          <article className="col-md-6" key={course._id}>
            <section className="card mb-4">
              <section className="card-body d-flex flex-column">
                <h2 className="card-title mb-2 text-center">{course.name}</h2>
                <br />
                <p className="card-text mb-2">
                  <b className="font-weight-bold">Description:</b> {course.description}
                </p>
                <p className="card-text mb-2">
                  <b className="font-weight-bold">Tutor:</b> {course.tutor}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text mb-0">
                    <b className="font-weight-bold">Deadline:</b> {course.deadline}
                  </p>
                  <button className="btn btn-primary modulesButton">View Modules</button>
                </div>
              </section>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CoursesPage;
