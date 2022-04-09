import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const {user,handleSignOut}=useFirebase();
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/Reviews'>Reviews</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid ?
                <button onClick={handleSignOut}> Signout</button>:
            <Link to='/login'>Login</Link>
            
            }
            </div>
    );
};

export default Header;