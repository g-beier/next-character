"use client";
import { FunctionComponent, PropsWithChildren } from "react";

const CustomInput: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const id = "asb";

  return (
    <>
      {children && (
        <label className="ml-2 text-sm" htmlFor={id}>
          {children}
        </label>
      )}
      <input
        id={id}
        className="mt-1 w-full rounded px-3 py-2 text-left text-stone-900 focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 dark:bg-stone-800 dark:text-white sm:text-sm"
      />
    </>
  );
};

export default CustomInput;
