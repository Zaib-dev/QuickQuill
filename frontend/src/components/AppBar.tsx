import { SlNote } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = () => {
  const { pathname } = useLocation();
  return (
    <div className=" p-2 px-12 pb-3 border-b border-b-slate-400 hover:bg-slate-100 justify-between flex items-center">
      <div className="font-semibold">
        <Link to={"/blogs"}>QuickQuill</Link>
      </div>

      <div className="flex items-center">
        {pathname == "/createblog" ? (
          <div className="flex mr-2 text-slate-700 cursor-pointer">
            <button
              type="button"
              className="focus:outline-none items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3.5 py-1.5 me-2"
            >
              Publish
            </button>
          </div>
        ) : (
          <div className="mr-2 text-slate-700 cursor-pointer hover:text-black ">
            <Link to={"/createblog"}>
              <div className="flex">
                <div className="text-2xl">
                  <SlNote />
                </div>
                <div className="mx-1 mr-4">Write</div>
              </div>
            </Link>
          </div>
        )}
        <Avatar type="large" name="A" />
      </div>
    </div>
  );
};

export default AppBar;
