import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='log'>
        <div className="container_login">
            <h1>Login</h1>
            <form action="/Php_file/form2.php" method="post">
                <input type="text" id="username" name="username" placeholder="Username" /><br /><br />
                <input type="password" id="password" name="password" placeholder="Password" /><br /><br />
                <div>
                    <p><a href="#">Forget password</a></p>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
        </div>
    );
}

export default Login;