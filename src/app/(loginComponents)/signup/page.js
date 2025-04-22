"use client";
import "./styles.css";
export default function Signup() {

    const onLoginCLick = () => {
        // Redirect to the login page
        window.location.href = "/login";
    }
    return (
        <div className="signup-container">
            <h1>Signup Page</h1>
            <p>Please enter your details to create an account.</p>
            <div><p>Already a member?</p><p onClick={onLoginCLick}>Login</p></div>
        </div>
    );
}