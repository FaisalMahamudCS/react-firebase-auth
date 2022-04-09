import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Products = () => {
    const {user}=useFirebase();
    return (
        <div>
            <h5>{user ?user.displayName:'Who hell are you'}</h5>
        </div>
    );
};

export default Products;