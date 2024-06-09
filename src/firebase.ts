import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  User,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  get,
  Database,
} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDoU0HemP_be9Yg54DOQF0zDWzL4-JQUro",
    authDomain: "car-tracker-5b0a5.firebaseapp.com",
    projectId: "car-tracker-5b0a5",
    storageBucket: "car-tracker-5b0a5.appspot.com",
    messagingSenderId: "936070380078",
    appId: "1:936070380078:web:3f41c03c7b00bf83b83dbf",
  };
  
  const app: FirebaseApp = initializeApp(firebaseConfig);
  const auth: Auth = getAuth(app);
  const db: Database = getDatabase();

  const customEmailKey: string = "@chevellemail.com";

  const validateUsername = (username: string): boolean => {
    // Ensures there's only letters or numbers
    const pattern: RegExp = /^[a-zA-Z0-9]+$/;
    return pattern.test(username.trim());
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const login = (username: string, password: string): void => {
  
    // Ensure username & password is good
    if (!validateUsername(username) && !validatePassword(password)) {
      alert("Invalid username AND password");
      return;
    } else if (!validateUsername(username)) {
      alert("Invalid username");
      return;
    } else if (!validatePassword(password)) {
      alert("Invalid password");
      return;
    }
  
    signInWithEmailAndPassword(auth, username + customEmailKey, password)
      .then(() => {
        const user: User | null = auth.currentUser;
        if (user) console.log(`User ${user.uid} logged in.`);
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          alert("Username or Password is wrong");
          // TODO: Get proper error handling here
          return;
        }
        alert("Login Error: " + error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
        // Optionally, redirect the user to a different page after logout
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out: ", error);
      });
  };

  /**
  * NOT FINISHED - just here to see how to do it, needs to be flushed out for Adding cars
  */
  const saveData = () => {
    const name: string = "carName3";
    const year: string = "year3";
    const color: string = "color3";
    set(ref(db, "cars/chevelles/" + name), {
      year,
      color,
    });

    // idea is like this:
    /*
    params are:
    path: string --> should be: "cars/chevelles"
    carObject: {}
    
    set(ref(db, path + uniqueID), carObject);
    */
    console.log("Data Saved");
  };

  const getData = (): void => {
    const dbRef = ref(db);
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const cars = snapshot.val().cars.chevelles;
          for (const car in cars) {
            console.log(
              `Name: ${car} | Year: ${cars[car].year} | Color: ${cars[car].color}`
            );
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  export {login, logout, getData, saveData}