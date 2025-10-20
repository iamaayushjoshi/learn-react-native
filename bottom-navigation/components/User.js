import { View, Text, Button } from "react-native";
import React from "react";

const User = ({ route, navigation }) => {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>User</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
};

export default User;
