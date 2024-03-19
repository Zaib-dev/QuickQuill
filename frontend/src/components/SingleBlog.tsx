import { useParams } from "react-router-dom";
import AppBar from "./AppBar";

function SingleBlog() {
  const { blogid } = useParams();
  console.log(blogid);
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 h-screen mt-14 mx-20">
        <div className="col-span-8">
          <BlogSide />
        </div>
        <div className="col-span-4">
          <AuthorSide />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;

function BlogSide() {
  return (
    <div>
      <div className="font-bold text-4xl">
        The titile foasd asdklajsd lkjasdjasl
      </div>
      <div className="text-slate-500 my-3">Posted on August 24, 2023</div>
      <div>
        the content od the blog asre aslkjlasd laskjdkllasjdkl
        asdlkjaskldjnasldjlasj asldkjasd asdjaslkdaslkdjasdjaskldj
        asdkasdasdkhashdjkash askhdaskhdhasdhkjas dasjkdhasjkhdkhasd
        askjdhkashdjkashd kjashdjhksdasdhasjkdhasjhdjkhasjksd
      </div>
    </div>
  );
}

function AuthorSide() {
  return (
    <div>
      <div className="font-semibold">Author</div>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-1 h-6 w-6 bg-gray-300 rounded-full mt-6"></div>
        <div className="col-span-11 ml-2">
          <div className="font-bold text-xl">Jokester</div>
          <div className="mt-2 text-slate-600">
            Master of mirth, asd s and the funniest person
          </div>
        </div>
      </div>
    </div>
  );
}
