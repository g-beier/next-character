"use client";
import { Feats } from "@/app/api/_models/feat.model";
import { Disclosure } from "@headlessui/react";
import { FunctionComponent } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clipboard from "@/app/_utils/clipboard";

type CardProps = {
  feat: Feats;
};

const FeatCard: FunctionComponent<CardProps> = ({ feat }) => {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            onClick={(e) => {
              if (e.ctrlKey) {
                clipboard(`${feat?.title}: ${feat?.desc}`);
              }
            }}
            title="Pressione Ctrl e clique para copiar o poder."
            className={`${
              open
                ? "rounded-t bg-amber-100 text-amber-900 dark:bg-stone-700"
                : "rounded bg-white text-stone-900 dark:bg-stone-800"
            } flex w-full justify-between px-4 py-2 text-left text-sm font-medium hover:bg-amber-100 hover:text-amber-900 focus:outline-none  focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-300 dark:text-white dark:hover:bg-stone-700 dark:hover:text-white`}
          >
            <span>{feat.title}</span>
            <ChevronDownIcon
              className={`${
                open && "transofrm rotate-180"
              } h-6 w-6 text-stone-400`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={`${
              open && "rounded-b"
            } bg-white px-4 py-2 text-sm dark:bg-stone-800`}
          >
            <p>{feat.desc}</p>
            {feat?.require && (
              <p className="mt-2">
                <strong>Pré-requisitos:</strong> {feat?.require}.
              </p>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FeatCard;
