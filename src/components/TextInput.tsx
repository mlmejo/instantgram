import { forwardRef, InputHTMLAttributes, Ref } from 'react';

export default forwardRef(function TextInput(
  {
    type = 'text',
    className = '',
    ...props
  }: InputHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      type={type}
      {...props}
      className={
        'dark:border-ig-separator-dark block w-full rounded-[4px] border-ig-separator bg-white text-xs placeholder:text-gray-400 dark:bg-cod-gray-950 dark:text-white ' +
        className
      }
    />
  );
});
