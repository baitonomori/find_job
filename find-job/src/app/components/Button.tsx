import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & JSX.IntrinsicElements['button'];

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`md:px-5 px-3 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-10 hover:opacity-80 transition-opacity duration-500 ease-out ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

