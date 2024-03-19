import { useState } from "react";
import InputField from "./InputField";
import { SignupInput } from "@shahzaib_01/medium_common";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupField = () => {
  const navigate = useNavigate();

  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  const handleSignupRequest = () => {
    async function sendSignupRequest() {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        email: signupInputs.email,
        password: signupInputs.password,
        name: signupInputs?.name,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/blogs");
    }

    toast.promise(sendSignupRequest(), {
      loading: "Signing Up",
      success: "Signed Up",
      error: "Error when Signing Up",
    });
  };

  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="mx-10">
        <div className="flex flex-col">
          <div className="w-full flex justify-center font-bold text-3xl">
            Create an account
          </div>
          <div className="w-full flex justify-center mt-3 text-slate-500">
            Already have an account?{" "}
            <Link className="ml-1 underline" to={"/signin"}>
              Login
            </Link>
          </div>
          <div className="w-full px-20">
            <InputField
              label="Username"
              value={signupInputs?.name}
              placeholder="Enter your username"
              onChange={(e) => {
                setSignupInputs((previousState) => {
                  return { ...previousState, name: e.target.value };
                });
              }}
            />
            <InputField
              label="Email"
              value={signupInputs?.email}
              placeholder="m@example.com"
              onChange={(e) => {
                setSignupInputs((previousState) => {
                  return { ...previousState, email: e.target.value };
                });
              }}
            />
            <InputField
              label="Password"
              value={signupInputs?.password}
              placeholder="Enter your username"
              type="password"
              onChange={(e) => {
                setSignupInputs((previousState) => {
                  return { ...previousState, password: e.target.value };
                });
              }}
            />
            <button
              type="button"
              className="w-full mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleSignupRequest}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupField;
