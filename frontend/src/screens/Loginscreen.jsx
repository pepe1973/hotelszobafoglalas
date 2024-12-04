import React, { useState } from 'react';


const Loginscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const user = {
      email,
      password,
    };
  
    if{
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST', // A HTTP metódus
        headers: {
          'Content-Type': 'application/json', // A kérés fejlécének beállítása
        },
        body: JSON.stringify(user), // Az adatokat JSON formátumban küldjük
      });
  
      const result = await response.json(); // A válasz JSON formátumban
      console.log(result);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <div className='bs'>
            <h2>Bejelentkezés</h2>
            <input
              type='text'
              className='form-control'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password' 
              className='form-control'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className='btn btn-primary' onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;