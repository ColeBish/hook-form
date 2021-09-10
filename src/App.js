import react, { useState } from "react";
import './App.css';
import Form from "./components/Form";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="App">
      <div>
        <form onSubmit={() => { }}>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </form>
        <h1>Your Form Data</h1>

        <h3>First Name :</h3>
        <span>{firstName}</span>
        <h3>Last Name :</h3>
        <span>{lastName}</span>
        <h3>Email :</h3>
        <span>{email}</span>
        <h3>Password :</h3>
        <span>{password}</span>
        <h3>Confirm Password :</h3>
        <span>{confirmPassword}</span>
      </div>
    </div>
  );
}

export default App;
