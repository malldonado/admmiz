import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiProjectorScreenChart } from "react-icons/pi";


const Sales: React.FC = () => {
  const salesData = [
    {
      amount: "R$ 120.000,60",
      label: "Faturamento Total",
      percentage: "+9,23% em relação ao período anterior, há 30 dias",
      icon: <BiMoneyWithdraw />,
    },
    {
      amount: "R$ 20.000,00",
      label: "Despesas",
      percentage: "-1,09% em relação ao período anterior de 30 dias atrás",
      icon: <BiMoneyWithdraw />,
    },
    {
      amount: "1",
      label: "Projetos em Andamento",
      percentage: "+16,2% em relação ao período anterior, há 30 dias",
      icon: <PiProjectorScreenChart />,
    },
    {
      amount: "3",
      label: "Projetos Concluídos",
      percentage: "0,8% em relação ao período anterior de 30 dias atrás",
      icon: <PiProjectorScreenChart />,
    },
  ];

  return (
    <div className="container px-4 mx-auto bg-white mt-2 py-2 h-48 rounded-xl flex flex-col justify-between">
      <div className="grid grid-cols-4 gap-4">
        {salesData.map(({ amount, label, percentage, icon }) => (
          <SalesItem
            key={label}
            amount={amount}
            label={label}
            percentage={percentage}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

type SalesItemProps = {
  amount: string;
  label: string;
  percentage: string;
  icon?: JSX.Element;
};

const SalesItem: React.FC<SalesItemProps> = ({
  amount,
  label,
  percentage,
  icon,
}) => (
  <div className="bg-[#e5e7eb] text-black p-4 rounded-xl w-96">
    <div className="flex flex-col h-full justify-center">
      {icon && <div className="mt-2 text-2xl text-black">{icon}</div>}
      <span className="text-2xl font-bold mt-2">{amount}</span>
      <span className="text-lg font-medium mt-1">{label}</span>
      <span className="text-xs mt-1">{percentage}</span>
    </div>
  </div>
);

export default Sales;
