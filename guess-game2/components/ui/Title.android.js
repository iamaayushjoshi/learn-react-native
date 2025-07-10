import { Text, StyleSheet } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS == "ios" ? 1 : 2,
    // borderColor: Platform.select({
    //   ios: "red",
    //   android: "black",
    // }),
    borderWidth: 2,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
  },
});

export default Title;
