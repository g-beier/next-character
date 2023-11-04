"use client";

import { FunctionComponent } from "react";
import { PrimaryButton, SecondaryButton } from "../_components/CustomButton";
import { CogIcon } from "@heroicons/react/24/outline";
import CustomSelect from "../_components/CustomSelect";
import FeatList from "../_components/FeatList";
import CustomInput from "../_components/CustomInput";
import CustomToggle from "../_components/CustomToggle";
import AttrInput from "../_components/AttrInput";

const Page: FunctionComponent = () => {
  const races = [
    { name: "Humano" },
    { name: "Lefou" },
    { name: "Minotauro" },
    { name: "Osteon" },
    { name: "Sulfure" },
  ];
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 px-8">
      <div>
        <CustomToggle />
      </div>
      <div className="inline-flex gap-8">
        <PrimaryButton action={() => alert("Primário!")}>
          Primário
        </PrimaryButton>
        <PrimaryButton action={() => alert("Icone!")}>
          <CogIcon className="h-6 w-6" />
          Iconificado
        </PrimaryButton>
        <SecondaryButton action={() => alert("Secundário!")}>
          Secundário
        </SecondaryButton>
      </div>
      <div>
        <CustomSelect options={races} label="Raças" />
      </div>
      <div>
        <FeatList />
      </div>
      <div>
        <CustomInput>Nome do Personagem</CustomInput>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["for", "des", "con", "int", "sab", "car"].map((str) => (
          <AttrInput key={str} />
        ))}
      </div>
    </main>
  );
};

export default Page;
