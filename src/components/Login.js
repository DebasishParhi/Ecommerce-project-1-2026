import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const navigate = useNavigate()

    const signUp = async () => {
        debugger
        try {
            let response = await fetch("http://localhost:5000/register", {
                method: "POST",
                body: JSON.stringify({ name, email, pass }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let result = await response.json();
            console.log(result);

            if (result) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/");
            }

        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div style={{ marginLeft: "30%" }}>
            <h1>Sign Up Here</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className='inputbox' type='text' placeholder='Enter Name' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='inputbox' type='text' placeholder='Enter Email' />
            <input value={pass} onChange={(e) => setPass(e.target.value)} className='inputbox' type='password' placeholder='Password' />
            <button onClick={signUp} style={{ justifyContent: 'center', alignContent: 'center' }} className='button' type='button'>Sign Up</button>
        </div>
    )
}

export default Login
