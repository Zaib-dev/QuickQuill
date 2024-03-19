import AuthQuote from "./AuthQuote";
import SigninField from "./SigninField";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 h-screen">
        <SigninField />
      </div>
      <div className="col-span-1 bg-slate-200 h-screen ">
        <AuthQuote />
      </div>
    </div>
  );
};

export default Signin;
