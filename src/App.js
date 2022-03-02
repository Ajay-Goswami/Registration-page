import React,{useState} from "react";
import LoginPage from './components/LoginPage';

function App() {
  const adminLogin = {
    email: 'admin@gmail.com',
    username: "admin",
    password: "admin"
  };
  const [user, setUser]= useState({name:"",email:""});  
  const [error, setError ] = useState("");

  const Login= details => {
    console.log(details);
  }

  const LogOut =() =>{
    console.log("logout");
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
         <h1>Welcome, <span>{user.name}</span></h1>
         <button >Logout</button>
        </div>
          ):
          (<LoginPage Login={Login} error={error}/>)
          }
    </div>
  );
}

export default App;