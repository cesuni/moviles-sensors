import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 24.023149;
const LONGITUDE = -104.5525;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Mapview() {
  const [region, setRegion] = useState({
    latitude: LATITUDE, // initial location latitude
    longitude: LONGITUDE, // initial location longitude
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} zoomTapEnabled={false}>
        <Marker
          coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}
          pinColor={"purple"} // any color
          title={"title"}
          description={"description"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
