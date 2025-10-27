import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [message, setMessage] = useState();
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  useEffect(() => {
    axios
      .get(
        `https://react-native-project-c514a-default-rtdb.firebaseio.com/message.json?auth=${token}`
      )
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        Alert.alert("Error occoured", "Error fetching messages");
      });
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
