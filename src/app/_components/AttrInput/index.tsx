"use cliente";
import { useState } from "react";

const AttrInput = () => {
  const [attrValue, setAttrValue] = useState<number>(10);
  const mod = (num: number): string => (Math.floor(num / 2) - 5).toString();

  return (
    <div className="inline-flex flex-row items-center">
      <input
        type="number"
        min={0}
        value={attrValue}
        onChange={(ev) => setAttrValue(parseInt(ev.target.value))}
        className="inline-block w-12 rounded-l px-2 py-2 text-center align-middle text-stone-900 focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 dark:bg-stone-800 dark:text-white"
      />
      <span className="inline-block w-12 rounded-r-full bg-amber-600 py-2 text-center font-medium">
        {mod(attrValue)}
      </span>
    </div>
  );
};

export default AttrInput;
