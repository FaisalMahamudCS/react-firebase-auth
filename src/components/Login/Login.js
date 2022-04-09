import React from 'react';
import useFirebase from '../hooks/useFirebase';
const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            please login
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In </button>
            </div>
            <form>
              
                <input type='email' placeholder='email'/>
                <br/>
                <input type='password' placeholder='email'/>
                <br/>
                <input type='submit' value="Register" placeholder='email'/>
                <br/>
            </form>
        </div>
    );
};

export default Login;