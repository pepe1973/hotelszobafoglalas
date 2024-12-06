import React, { useState } from "react";
import Loader from '../components/Loader'
import Error from '../components/Error'

const Loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = async () => {

      

      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        alert("Sikeres regisztráció!");
      } else {
        alert(result.msg);
      }
    };

    login();
  };

  return (
    <div>
      {loading && (<Loader/>)}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error && (<Error message='Nem léteik ilyen felhasználó' />)}
          <div className="bs">
            <h2>Bejelentkezés</h2>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
