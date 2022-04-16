import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';

const User = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='mt-20'>
            <h1 className='text-lal text-center text-3xl my-20'>Hello,{user.displayName} </h1>
        </div>
    );
};

export default User;