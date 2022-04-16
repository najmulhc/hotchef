import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import {auth} from '../firebase.init'
import loginBanner from "./img/loginBanner.png";
import { async } from '@firebase/util';
const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword, user, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault();
        console.log (email, password);
       if(password === confirmPassword){
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName: displayName});
       }
        
    }
    if(user){
        console.log(user);
        navigate('/')
    }
    return (
        <div className=" mt-20  ">
        <div className="relative h-[750px] overflow-hidden">
          <img
            src={loginBanner}
            className="  w-full h-full bg-cover opacity-75"
            alt=""
          />
          <div className="absolute w-full h-full items-center top-0 left-0 flex   ">
            <div className="border border-lal p-6 rounded-md mx-auto bg-white  bg-opacity-40 shadow-md w-[400px] ">
              <h2 className="text-3xl font-bold text-lal pb-2 opacity-full">
                Please Register
              </h2>
              <hr className="border  border-lal  mb-4" />
              <form action="" onSubmit={register}>
                <input
                  type="text"
                  className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                  placeholder="Enter your name"
                  onChange={(e)=> setDisplayName(e.target.value) }
                  required
                />
                <input
                  type="email"
                  className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                  placeholder="Enter email address"
                  onChange={(e)=> setEmail(e.target.value) }
                  required

                />
                <input
                  type="password"
                  className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                  placeholder="Enter password"
                  onChange={(e)=> setPassword(e.target.value) }
                  required
                />
                <input
                  type="password"
                  className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                  placeholder="Confirm password"
                  onChange={(e)=> setConfirmPassword(e.target.value) }
                  required
                />
                <small className="text-gray-700 m-0 p-0 text-left">
                 Already registered?{" "}
                  <Link to="/login" class="text-lal">
                   Login here
                  </Link>
                </small>
                <button
                  type="submit"
                  className="w-full border rounded-md bg-lal text-white text-xl mb-3 p-2"
                >
                 Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;