import { View, StyleSheet, Alert, Image, Text } from "react-native";
import OutlineButton from "./UI/OutlineButton";
import { Colors } from "../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import { getMapPreview } from "../util/location";
function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInfo, requestLocPermission] =
    useForegroundPermissions();
  async function verifyPermission() {
    if ((locationPermissionInfo.status = PermissionStatus.UNDETERMINED)) {
      const permissionResponse = await requestLocPermission();
      return permissionResponse.granted;
    }

    if ((locationPermissionInfo.status = PermissionStatus.DENIED)) {
      Alert.alert(
        "Permission required",
        "You need location permission for this"
      );
      return false;
    }

    return true;
  }
  async function getLocationHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }
  function pickOnMapHandler() {}

  let locationPreview = <Text>No location picked yet...</Text>;

  if (pickedLocation) {
    const uri = getMapPreview(pickedLocation.lat, pickedLocation.lng);
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User{" "}
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick On Map{" "}
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    indow: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItem: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
export default LocationPicker;
