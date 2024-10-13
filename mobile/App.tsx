import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

// Definindo as telas
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Início</Text>
    </View>
  );
}

function ProjectScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function BudgetsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function FinanceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function StockScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function ContributorsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function TasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function DocumentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function ReportsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Projeto</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Configurações</Text>
    </View>
  );
}

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#192231",
          },
          headerTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#192231",
            width: 240,
          },
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#ffffff',
          drawerActiveBackgroundColor: '#315bd4'
        }}
      >
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Projetos" component={ProjectScreen} />
        <Drawer.Screen name="Orçamentos" component={BudgetsScreen} />
        <Drawer.Screen name="Finanças" component={FinanceScreen} />
        <Drawer.Screen name="Materias e Estoque" component={StockScreen} />
        <Drawer.Screen name="Contribuidores" component={ContributorsScreen} />
        <Drawer.Screen name="Tarefas" component={TasksScreen} />
        <Drawer.Screen name="Documentos" component={DocumentsScreen} />
        <Drawer.Screen name="Relatórios" component={ReportsScreen} />
        <Drawer.Screen name="Configurações" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
