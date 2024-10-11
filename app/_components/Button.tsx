"use client";

interface ButtonProps {
  content: string;
  width: string;
  height: string;
  action?: () => void;
}

/**
 *
 * 크기 조정시 w, h 붙여서 작성 예) w-[100px]
 * content 필수!
 * action으로 onClick 가능!
 */
function Button(props: ButtonProps) {
  return (
    <button
      className={` ${props.width} ${props.height} rounded-md bg-gray-500 text-white brightness-95 active:bg-slate-700 transition-all`}
      onClick={props.action}
    >
      {props.content}
    </button>
  );
}

export default Button;