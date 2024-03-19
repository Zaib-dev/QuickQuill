import { useState } from "react";
import InputField from "./InputField";
import { SigninInput } from "@shahzaib_01/medium_common";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SigninField = () => {
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSigninRequest = () => {
    async function sendSigninRequest() {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email: signinInputs.email,
        password: signinInputs.password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/blogs");
    }
    toast.promise(sendSigninRequest(), {
      loading: "Signing In",
      success: "Signed In",
      error: "Error when Signing In",
    });
  };
  return (
    <div className=" h-screen flex flex-col justify-center">
      <div className="mx-10">
        <div className="flex flex-col">
          <div className="w-full flex justify-center font-bold text-3xl">
            Login your account
          </div>
          <div className="w-full flex justify-center mt-3 text-slate-500">
            Don't have an account?
            <Link className="ml-1 underline" to={"/signup"}>
              Signup
            </Link>
          </div>
          <div className="w-full px-20">
            <InputField
              label="Email"
              value={signinInputs?.email}
              placeholder="m@example.com"
              onChange={(e) => {
                setSigninInputs((previousState) => {
                  return { ...previousState, email: e.target.value };
                });
              }}
            />
            <InputField
              label="Password"
              value={signinInputs?.password}
              placeholder="Enter your username"
              type="password"
              onChange={(e) => {
                setSigninInputs((previousState) => {
                  return { ...previousState, password: e.target.value };
                });
              }}
            />
            <button
              type="button"
              className="w-full mt-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleSigninRequest}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninField;
