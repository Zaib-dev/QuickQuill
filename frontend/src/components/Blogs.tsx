import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import BlogCard from "./BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";

interface Auther {
  name?: string;
}
interface BlogRequest {
  title: string;
  content: string;
  author: Auther;
  authorId: string;
  id: string;
  published: boolean;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogRequest[]>([]);
  useEffect(() => {
    async function getBlogs() {
      const response = await axios.get(`${BACKEND_URL}/api/v1/post`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(response.data.posts);
      setBlogs(response.data.posts);
    }
    getBlogs();
  }, []);
  return (
    <div>
      <AppBar />
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`}>
          <BlogCard
            title={blog.title}
            content={blog.content}
            name={blog.author.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
