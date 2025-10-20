import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./components/WelcomeScreen";
import User from "./components/User";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <BottomTab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
