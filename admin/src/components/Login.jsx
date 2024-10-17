import React from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/v1/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg px-6 py-8 w-full max-w-xs sm:max-w-sm md:max-w-sm ">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
