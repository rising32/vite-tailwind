import React from 'react';

type ButtonProps = {
  text: string;
  containerClassName?: string;
  borderClassName?: string;
  isRounded?: boolean;
};

function Button({
  text,
  containerClassName = 'w-full',
  isRounded = true,
  borderClassName = '',
}: ButtonProps) {
  return (
    <div
      className={`flex flex-row items-center justify-center border-2 p-4 ${containerClassName} ${borderClassName} ${
        isRounded ? 'rounded-full' : 'rounded-none'
      }`}
    >
      <div>{text}</div>
    </div>
  );
}

export default Button;
