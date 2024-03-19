import { ChangeEvent } from "react";

interface Props {
  label: string;
  value?: string;
  placeholder: string;
  type?: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-gray-900 mt-4">
        {props.label}
      </label>
      <div className="h-30">
        <input
          type={props.type}
          className="resize-none w-full text-l px-2 py-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
};

export default InputField;
