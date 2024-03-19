import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AppBar from "./AppBar";

function CreateBlog() {
  return (
    <div>
      <AppBar />
      <TextArea />
    </div>
  );
}

export default CreateBlog;

interface BlogInterface {
  title: string;
  content: string;
}

function TextArea() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
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

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [blogContent.title]);
  return (
    <div>
      <div>
        <TextareaAutosize
          id="message"
          className="p-2.5 pt-12 outline-none resize-none w-full px-52 text-4xl font-semibold "
          placeholder="Title"
          onChange={handleChange}
          value={blogContent.title}
          name="title"
        />
      </div>
      <div>
        <TextareaAutosize
          id="message"
          className="p-2.5 pt-12 outline-none resize-none w-full px-52 text-4xl font-semibold"
          placeholder="Title"
          onChange={handleChange}
          value={blogContent.content}
          name="title"
        />
      </div>
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
