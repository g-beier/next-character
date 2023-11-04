"use client";
import { FunctionComponent, useState } from "react";
import { Switch } from "@headlessui/react";

type ToggleProps = {
  initialValue?: boolean;
  acessMessage?: string;
};

const CustomToggle: FunctionComponent<ToggleProps> = ({
  initialValue = false,
  acessMessage,
}) => {
  const [enabled, toggleEnabled] = useState<boolean>(initialValue);
  return (
    <Switch
      checked={enabled}
      onChange={toggleEnabled}
      className={`${
        enabled ? "bg-amber-500" : "bg-stone-700"
      } relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2  focus-visible:ring-offset-amber-300`}
    >
      {acessMessage && <span className="sr-only">{acessMessage}</span>}
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-stone-100 transition`}
      ></span>
    </Switch>
  );
};

export default CustomToggle;
