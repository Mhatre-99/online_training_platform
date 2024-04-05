import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import api from "../../baseUrl";
import './CoursesPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AdminCoursesPage = (props) => {
  const {user} = props;
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api.get('/courses/get/all')
      .then(response => {
        setCourses(response.data.courses);
        console.log(response.data.courses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const shortenDescription = (description) => {
    if (description.length > 300) {
      return description.substring(0, 300) + '...';
    }
    return description;
  };


  return (
    <main className="container mt-5">
      <header className="text-center">
        <h1 className="mb-4 heading">Course Library</h1>
        <div className="search-bar text-center mb-4">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="primary" className='add-course-button-courses' onClick={handleClickOpen}>
        + ADD COURSE
        </Button>
      </header>

      <React.Fragment>   
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const username = formJson.username;
              const password = formJson.password;

              if (username === password && username === "admin") {
                navigate("/module/create");
              } else {
                toast.error("Invalid credentials")
              }
              console.log(username);
              console.log(password);
              handleClose();
            },
          }}
        >
          <DialogTitle>Login as Admin</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Only admins can add courses. Please enter the admin credentials below to open the "Create Course" page
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="username"
              label="Username"
              type="username"
              fullWidth
              variant="standard"
              InputLabelProps={{
                style: { color: '#f36b37' },
              }}
              InputProps={{
                style: { borderBottom: '1px solid #f36b37' },
              }}
            />
            <TextField
              required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              InputLabelProps={{
                style: { color: '#f36b37' },
              }}
              InputProps={{
                style: { borderBottom: '1px solid #f36b37' },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ color: '#f36b37' }}>Cancel</Button>
            <Button type="submit" style={{ color: '#f36b37' }}>Proceed</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <section className="row">
        {filteredCourses.map(course => (
          <article className="col-md-6" key={course._id}>
            <section className="card mb-4">
              <section className="card-body d-flex flex-column">
                <h2 className="card-title mb-2 text-center">{course.name}</h2>
                <br />
                <p className="card-text mb-2">
                  <b className="font-weight-bold">Description:</b> {shortenDescription(course.description)}
                </p>
                <p className="card-text mb-2">
                  <b className="font-weight-bold">Tutor:</b> {course.tutor}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text mb-0">
                    <b className="font-weight-bold">Deadline:</b> {course.deadline}
                  </p>
                  <Link to={`/courses/${course._id}/modules`} className="btn btn-primary modulesButton">View Modules</Link>
                </div>
              </section>
            </section>
          </article>
        ))}
      </section>
      <ToastContainer />
    </main>
  );
};

export default AdminCoursesPage;
