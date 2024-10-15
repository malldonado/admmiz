import { View, Text } from "react-native";
import Table from "../components/Table";

const data = [
  {
    value: "R$ 120.000,60",
    label: "Faturamento Total",
    percentage: "+9,23% em relação ao período anterior, há 30 dias",
  },
  {
    value: "R$ 20.000,00",
    label: "Despesas",
    percentage: "-1,09% em relação ao período anterior de 30 dias atrás",
  },
  {
    value: "1",
    label: "Projetos em Andamento",
    percentage: "+16,2% em relação ao período anterior, há 30 dias",
  },
  {
    value: "3",
    label: "Projetos Concluídos",
    percentage: "0,8% em relação ao período anterior de 30 dias atrás",
  },
];

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#e5e7eb",
            width: "100%",
            height: 100,
            margin: 5,
            borderRadius: 10,
            marginTop: 10,
            paddingTop: 7,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              height: 40,
              color: "#000000",
              marginLeft: 10,
              fontFamily: "Nunito_700Bold",
            }}
          >
            {item.value}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              height: 40,
              color: "#000000",
              marginLeft: 10,
              fontFamily: "Nunito_700Bold",
            }}
          >
            {item.label}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              height: 40,
              color: "#000000",
              marginLeft: 10,
              fontFamily: "Nunito_700Bold",
            }}
          >
            {item.percentage}
          </Text>
        </View>
      ))}
      <Table />
    </View>
  );
}

export default HomeScreen;
