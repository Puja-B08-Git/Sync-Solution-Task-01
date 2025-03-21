import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

function Home() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate("/");
    };

    return (
        <div className='homePage'>
            <h1> Home Page</h1>
            <div className='logout-btn'>
            <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    );
}

export default Home;
