import FeatCard from "./FeatCard";

const FeatList = () => {
  const feats = [
    {
      _id: 1,
      title: "Acuidade com Arma",
      desc: "Quando usa uma arma leve de corpo a corpo ou uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano.",
      require: "Des 1",
      type: ["Geral", "Combate"],
    },
    {
      _id: 2,
      title: "Proficiência",
      desc: "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.",
      type: ["Geral", "Combate"],
    },
  ];
  return (
    <div className="flex w-full flex-col gap-2">
      {feats.map((feat, index) => (
        <FeatCard feat={feat} key={feat?._id ?? index} />
      ))}
    </div>
  );
};

export default FeatList;
