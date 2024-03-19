import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Blogs from "./components/Blogs";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blogid" element={<SingleBlog />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
    </>
  );
}
