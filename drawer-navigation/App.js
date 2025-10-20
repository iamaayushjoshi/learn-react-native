import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./components/WelcomeScreen";
import User from "./components/User";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size || 24} color={color || "#000"} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={User}
          options={{
            drawerLabel: "Users",
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="person"
                size={size || 24}
                color={color || "#000"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
