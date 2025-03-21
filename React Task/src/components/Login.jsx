import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [showOtpField, setShowOtpField] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); 
        setGeneratedOtp(newOtp);
        console.log("Generated OTP:", newOtp); 
        setShowOtpField(true);
        alert("OTP has been sent on console.");
    };

    const verifyOTP = (e) => {
        e.preventDefault();
        if (otp === generatedOtp) { 
            alert("Login Successful!");
            navigate("/home");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className='login-page'>
            <div className='welcome-img'></div>
            {!showOtpField ? (
                <form className='login-form' onSubmit={handleLogin}>
                    <h1 className='login-header'>Login Page</h1>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='login-input' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='login-input' required />
                    <button type='submit' className='login-btn'>Login</button>
                </form>
            ) : (
                <form className='otp-form' onSubmit={verifyOTP}>
                    <h1 className='otp-header'>Enter OTP</h1>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP' className='otp-input' required />
                    <button type='submit' className='otp-btn'>Verify OTP</button>
                </form>
            )}
        </div>
    );
}

export default Login;

