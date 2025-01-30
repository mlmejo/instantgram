import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
  type = 'submit',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      {...props}
      className="hover:bg-ig-primary-button-hover bg-ig-primary-button text-white"
    >
      {children}
    </button>
  );
}
