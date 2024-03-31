const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const registerUserService = async (user) => {
    //firebase code - sign up
    const auth = getAuth();
    const navigate = useNavigate(); 
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (userDetails) => {
        // Signed up 
        const firebaseUser = userDetails.user;
        delete user.password;
        sessionStorage.setItem("token", firebaseUser.accessToken);
        sessionStorage.setItem("id", firebaseUser.uid);

        // /users/add call
         // Call your backend route to add user
         return axios.post('/add', { data: user })
         .then(response => {
           // Redirect to homepage upon successful addition
           navigate('/'); // Redirect to homepage
         })
         .catch(error => {
           // Handle error, possibly retry adding user
           console.error('Error adding user:', error);
           // Retry adding user
           return registerUserService(user); // Recursively call registerUserService
         });
        //return firebaseUser.accessToken;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return null;
        // ..
    });
}
export const loginUserService = async (user) => {
    //validate field here
    const auth = getAuth();
    const navigate = useNavigate(); 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const firebaseUser = userCredential.user;
        sessionStorage.setItem("token", firebaseUser.accessToken);
        sessionStorage.setItem("id", firebaseUser.uid);
        //return {token: firebaseUser.accessToken, _id: firebaseUser.uid};
        // ...
         // Check user role
        return axios.get(`/user/${firebaseUser.uid}/role`)
        .then(response => {
          const userRole = response.data.role;
          // Redirect based on user role
          if (userRole === 'admin') {
            navigate('/admin'); // Redirect to admin homepage
          } else if (userRole === 'employee') {
            navigate('/employee'); // Redirect to employee homepage
          } else {
            console.error('Unknown user role');
            // Handle unknown user role
          }
        })
        .catch(error => {
          console.error('Error fetching user role:', error);
          // Handle error
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return null;
    });
}
