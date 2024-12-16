import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Assuming styles are defined here

function Signup() {
    return (
        <div className="contain">
            <h1>Sign Up</h1>
            <p>Enter your details below to create an account.</p>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" /><br />

                <div className="para">
                    <p>Already have an account?</p>
                    <Link to="/Login">Login</Link>
                </div>

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}

export default Signup;
