import React from "react";
import { Link } from "react-router-dom";
import loginBanner from "./img/loginBanner.png";
const Login = () => {
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
              Login
            </h2>
            <hr className="border  border-lal  mb-4" />
            <form action="">
              <input
                type="email"
                className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                placeholder="Enter email address"
              />
              <input
                type="password"
                className="w-full border rounded-sm border-lal text-xl mb-3 p-2 "
                placeholder="Enter password"
              />
              <small className="text-gray-700 m-0 p-0 text-left">
                Forgot your password?{" "}
                <Link to="/" class="text-lal">
                  Reset password
                </Link>
              </small>
              <button
                type="submit"
                className="w-full border rounded-md bg-lal text-white text-xl mb-3 p-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
