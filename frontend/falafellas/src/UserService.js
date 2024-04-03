import axios from './helper';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { auth } from "./FirebaseService";
import './Components/Authentication/Login.css';


const app_url = 'http://localhost:3000'; //Change URLLLLLLLLLLLLLLLLLLLLLLLLLLL

export const registerUserService = async (user) => {
    const { name, email, phone_number, designation, roles, password, birth_date, rewards_earned } = user;
    //firebase code - sign up
    //const auth = getAuth();
    // const navigate = useNavigate();
    //debugger;
    // Validating fields
    if (!name || !email || !roles || !password) {
      alert('Name, email, roles, and password are required.');
      highlightEmptyFields(); // Call a function to highlight empty fields
      return null;
    }

    // Validating password
    const passwordRegex = /^(?=.*[@!/$%#])(?=.*[0-9a-zA-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 6 characters long and contain at least one of @!/$%# signs.');
        highlightPasswordField(); // Call a function to highlight password field
        return null;
    }

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (userDetails) => {
        // Signed up 
        const firebaseUser = userDetails.user;
        delete user.password;
        sessionStorage.setItem("token", firebaseUser.accessToken);
        sessionStorage.setItem("id", firebaseUser.uid);
        
        // /users/add call
         // Call your backend route to add user
         return axios.post('/users/add', { _id: firebaseUser.uid , name, email, phone_number, designation, roles: roles.toLowerCase(), password, birth_date, rewards_earned })
         .then(response => {
           // Redirect to homepage upon successful addition
           //navigate('/'); // Redirect to Course Page
           window.location.href = `${app_url}/course`;
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
  //const auth = getAuth();
  //const navigate = useNavigate(); 
    //validate field here
    if (!user.email || !user.password) {
      alert('Please enter both email and password');
      return;
    }
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        // Signed in 
        const firebaseUser = userCredential.user;
        sessionStorage.setItem("token", firebaseUser.accessToken);
        sessionStorage.setItem("id", firebaseUser.uid);
        //return {token: firebaseUser.accessToken, _id: firebaseUser.uid};
        // ...
         // Check user role
        return axios.get(`/users/get/${firebaseUser.uid}`)
        .then(response => {
          debugger;
          const userRole = response.data.user.roles;
          //Redirect based on user role
          if (userRole === 'admin') {
            window.location.href = `${app_url}/course`; // Redirect to admin homepage //Change URLLLLLLLLLLLLLLLLLLLLLLLLLLL
          } else if (userRole === 'employee') {
            window.location.href = `${app_url}/course`; // Redirect to employee homepage //Change URLLLLLLLLLLLLLLLLLLLLLLLLLLL
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


export const forgotPassword = (user) => {
  sendPasswordResetEmail(auth, user.email)
  .then(() => {
    // Password reset email sent!
    // ..
    window.location.href = `${app_url}/login`;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

// Function to highlight empty fields
const highlightEmptyFields = () => {
  const emptyFields = document.querySelectorAll('input:required[value=""]');
  emptyFields.forEach(field => {
    field.classList.add('empty-field');
  });
};

// Function to highlight password field
const highlightPasswordField = () => {
  const passwordField = document.querySelector('input[name="password"]');
  passwordField.classList.add('invalid-password');
};
