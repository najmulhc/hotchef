import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const googleSignIn = event => {
        event.preventDefault();
        signInWithGoogle();
    }
    const githubSignIn = event => {
        event.preventDefault();
        signInWithGithub();
    }
    const navigate = useNavigate(); 
    if(user || githubUser){
        user? console.log(user): console.log(githubUser);
        navigate('/')
    }
    return (
        <div>
            <div className='flex justify-between items-center gap-2'>
                <hr  className='border border-lal border-opacity-50 w-full' />
                <p className='  text-lal text-opacity-50 text-lg '>or </p>
                <hr className='border border-lal border-opacity-50 w-full' />
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <button className='bg-blue-600 rounded-md py-3 text-lg text-white shadow-lg flex items-center justify-center gap-1' onClick={googleSignIn}><ion-icon name="logo-google" className="text-2xl"></ion-icon> Sign in</button>
                <button className='bg-gray-900 shadow-lg rounded-md py-3 text-lg text-white flex items-center justify-center gap-1' onClick={githubSignIn}><ion-icon name="logo-github" className="text-2xl"></ion-icon> Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;