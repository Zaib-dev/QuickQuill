import AuthQuote from "./AuthQuote";
import SignupField from "./SignupField";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 h-screen">
        <SignupField />
      </div>
      <div className="col-span-1 bg-slate-200 h-screen ">
        <AuthQuote />
      </div>
    </div>
  );
};

export default Signup;
