import Avatar from "./Avatar";

interface BlogsType {
  title: string;
  content: string;
  name?: string;
}

const BlogCard = ({ title, content, name }: BlogsType) => {
  return (
    <div className="h-36 mx-52 flex flex-col mt-2 border-b border-slate-300	">
      <div className="flex items-center">
        <Avatar type="small" name={name} />
        <div className="ml-2 text-sm font-medium">
          {name == null ? "Anonymous" : name}
        </div>
        <div className="mx-1 pb-2 flex items-center text-slate-500">
          <Circle />
        </div>
        <div className="text-slate-500 text-sm">Dec 30, 2024</div>
      </div>

      <div>
        <div className="text-lg font-bold">{title}</div>
        <div>{content}</div>
      </div>

      <div>
        <div className="mt-4">{content.split(" ").length / 200} min read</div>
      </div>
    </div>
  );
};

function Circle() {
  return <div>.</div>;
}

export default BlogCard;
