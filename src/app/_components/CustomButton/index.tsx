"use client";
import { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  action: Function;
};
const PrimaryButton: FunctionComponent<ButtonProps> = ({
  children,
  action,
}) => {
  return (
    <button
      onClick={() => action()}
      className="inline-flex select-none items-center gap-1 rounded bg-amber-500 p-1 px-2 text-white focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300"
    >
      {children}
    </button>
  );
};

const SecondaryButton: FunctionComponent<ButtonProps> = ({
  children,
  action,
}) => {
  return (
    <button
      onClick={() => action()}
      className="inline-flex select-none items-center gap-1 rounded border border-white p-1 px-2 text-white focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300"
    >
      {children}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
