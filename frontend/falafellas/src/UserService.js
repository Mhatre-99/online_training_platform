import axios from './helper';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { auth } from "./FirebaseService";

const app_url = 'http://localhost:3000'; //Change URLLLLLLLLLLLLLLLLLLLLLLLLLLL

export const registerUserService = async (user) => {
    const { name, email, phone_number, designation, roles, password, birth_date, rewards_earned } = user;
    //firebase code - sign up
    //const auth = getAuth();
    // const navigate = useNavigate();
    //debugger;
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