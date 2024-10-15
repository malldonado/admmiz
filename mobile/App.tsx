import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import ProjectScreen from "./pages/ProjectScreen";
import BudgetsScreen from "./pages/BudgetsScreen";
import FinanceScreen from "./pages/FinanceScreen";
import StockScreen from "./pages/StockScreen";
import ContributorsScreen from "./pages/ContributorsScreen";
import TasksScreen from "./pages/TasksScreen";
import DocumentsScreen from "./pages/DocumentsScreen";
import ReportsScreen from "./pages/ReportsScreen";
import SettingsScreen from "./pages/SettingsScreen";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
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
