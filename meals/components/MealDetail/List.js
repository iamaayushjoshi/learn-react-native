import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint, index) => (
    <View style={styles.listItem} key={index}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    padddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
    fontSize: 18,
  },
});
export default List;
