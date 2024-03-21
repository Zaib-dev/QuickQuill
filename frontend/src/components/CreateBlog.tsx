import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AppBar from "./AppBar";

interface BlogInterface {
  title: string;
  content: string;
}

function CreateBlog() {
  const [blogContent, setBlogContent] = useState<BlogInterface>({
    title: "",
    content: "",
  });
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };
  return (
    <div>
      <AppBar />
      <TextArea handleChange = {handleChange} value = {blogContent.title} placeholder = "Title" name="title"/>
      <TextArea handleChange = {handleChange} value = {blogContent.content} placeholder="Whats on your mind" name="content"/>
    </div>
  );
}

export default CreateBlog;



function TextArea({handleChange, value, placeholder, name }: {  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void, value: string, placeholder: string, name: string}) {
  return (
    <div>
      <TextareaAutosize
        id="message"
        className={`p-2.5 pt-12 outline-none resize-none w-full px-52 text-4xl  ${name==="title" ? "font-semibold": "font-normal"} `}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
      />
    </div>
  );
}

function InputArea({
  text,
  textAreaRef,
  handleChange,
  placeholder,
}: {
  text: string;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement>;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <textarea
        id="message"
        className="p-2.5 pt-12 outline-none resize-none w-full px-52 text-4xl font-semibold "
        placeholder={placeholder}
        onChange={handleChange}
        value={text}
        ref={textAreaRef}
      />
    </div>
  );
}
