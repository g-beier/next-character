"use client";
import { Fragment, FunctionComponent, ReactNode, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type SelectProps = {
  label: string;
  options: Array<Option>;
  placeholder?: string;
};

type Option = {
  _id?: any;
  name: string;
};

const CustomSelect: FunctionComponent<SelectProps> = ({
  label,
  options,
  placeholder,
}) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {label && <Listbox.Label className="ml-2 text-sm">{label}</Listbox.Label>}
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 dark:bg-stone-800 sm:text-sm">
          <span className="block truncate">{selected.name ?? placeholder}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-stone-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-stone-800 sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={option?._id ?? index}
                value={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active &&
                    "bg-amber-200 text-amber-900 dark:bg-stone-700 dark:text-white"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default CustomSelect;
