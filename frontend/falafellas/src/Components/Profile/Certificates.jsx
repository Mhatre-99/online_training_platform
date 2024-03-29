import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { Navbar, Nav } from 'react-bootstrap';
import './Certificates.css';
import api from "../../baseUrl";

function Certificates() {
    const { userId } = useParams(); // Access userId parameter from URL
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        fetchCertificates();
    }, [userId]); // Re-fetch certificates when userId changes

    // Fetch certificates based on userId
    const fetchCertificates = async () => {
        try {
            const response = await api.post(`/users/add/rewards/${userId}`);
            setCertificates(response.data.reward); // Assuming the response contains "reward" field
        } catch (error) {
            console.error('Error fetching certificates:', error);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="justify-content-start navbar-second">
                <Nav className="flex-row navbar-second-elements">
                    <Nav.Link href="#certificates">Certificates</Nav.Link>
                    <Nav.Link href="#badges" className="mx-5">Badges</Nav.Link>
                </Nav>
            </Navbar>

            <div className='custom-table'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Course Name</th>
                            <th scope="col">Certificates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map((certificate, index) => (
                            <tr key={index}>
                                <td>{certificate.course_id}</td>
                                <td>{`Module: ${certificate.module_name}, Certificate: ${certificate.certificate}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </>       
    );
}

export default Certificates;
