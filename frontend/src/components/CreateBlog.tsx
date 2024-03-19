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

function TextArea() {
  return (
    <textarea
      id="message"
      className="p-2.5 pt-12 outline-none resize-none  w-full px-52 text-4xl font-semibold "
      placeholder="Title"
    ></textarea>
  );
}
