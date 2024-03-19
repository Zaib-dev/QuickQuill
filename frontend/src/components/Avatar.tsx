const Avatar = ({ type, name }: { type: "small" | "large"; name?: string }) => {
  return (
    <div
      className={` ${
        type === "small" ? "w-6 h-6" : "w-10 h-10"
      } relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          type === "small" ? "text-l" : "text-xl"
        } text-gray-600 dark:text-gray-300`}
      >
        {name == null ? "A" : name[0]}
      </span>
    </div>
  );
};

export default Avatar;
