import React, {useState, useEffect} from 'react'

const Loginscreen = () => {
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')

  function login(){
    if(password==cpassword){
      const user ={
        email,
        password
      }
      console.log(user)
    }else {
      alert('Passwords not matched')
    }
  }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5 mt-5'>

            <div className='bs'>
              <h2>Bejelentkezés</h2>
              
              <input type="text" className='form-control' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
              <input type="text" className='form-control' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

              <br />

              <button className='btn btn-primary' onClick={login}>Login </button>

            </div>

          </div>
        </div>
    </div>
  )
}

export default Loginscreen;