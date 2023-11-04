"use client";

import { signIn } from "next-auth/react";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  provider?: "discord";
}

const LoginButton: FunctionComponent<Props> = ({ provider = "discord" }) => {
  return (
    <button
      className="inline-flex flex-row flex-nowrap gap-1 bg-indigo-900 px-2 py-1 rounded-md font-medium text-white uppercase w-fit"
      onClick={() =>
        signIn(
          provider,
          {
            redirect: true,
            callbackUrl: "/",
          },
          { prompt: "none" }
        )
      }
    >
      <i>Dis</i>
      <span>Login</span>
    </button>
  );
};

export default LoginButton;
