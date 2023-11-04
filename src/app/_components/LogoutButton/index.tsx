"use client";

import { signOut } from "next-auth/react";
import { FunctionComponent, ReactNode } from "react";

const LogoutButton: FunctionComponent<{}> = ({}) => {
  return (
    <button
      className="inline-flex flex-row flex-nowrap gap-1 bg-indigo-900 px-2 py-1 rounded-md font-medium text-white uppercase w-fit"
      onClick={() => signOut()}
    >
      <i>Dis</i>
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
