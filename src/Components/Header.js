import React, { useState } from "react";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";
import logo from "./img/logo.png";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user]= useAuthState(auth);
    console.log(user);
    const logOut = (event) => {
        event.preventDefault();
        signOut(auth);
    }
    if(user){
        console.log(user.displayName);
    }
  return (
    <header className="shadow-md w-full fixed top-0 left-0  bg-white z-50">
     <div className="md:flex items-center md:justify-between  container md:mx-auto  py-4 ">
         <div className="flex  items-center">
             <img src={logo} className='h-12 pl-8 md:pl-0' alt="" />
         </div>
         <div className="text-3xl  absolute right-8 top-6 cursor-pointer text-choco md:hidden " onClick={()=> setOpen(!open)}>
         <ion-icon name={open? 'close': 'menu'}></ion-icon>
         </div>
         <ul className={`md:flex md:items-center md:gap-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-700 ease-out ${open? 'top-20': 'top-[-490px]'} text-choco`}>
             <li className="md:ml-4 pl-4 md:my-0 my-4 ">
                 <Link to='/'>Home</Link>
             </li>
             <li className="md:ml-4 pl-4  md:my-0 my-4  ">
                {user? <Link to='/ '>{user.displayName}</Link>: <Link to='/login'>login</Link>}
             </li>
           {user?  <li className="md:ml-4 pl-4  md:my-0 my-4  ">
                <button className="rounded-full bg-choco text-white font-semibold px-8 py-2" onClick={logOut}>Sign Out</button>
             </li>:<li></li>}
         </ul>
     </div>
     
    </header>
  );
};

export default Header;
