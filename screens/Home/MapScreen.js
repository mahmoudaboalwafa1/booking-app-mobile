import { useRoute } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const mapView = useRef(null);
  const route = useRoute();
  const properties = route?.params?.properties;
  const coordinates = [];
  const [statusPrice, setStatusPrice] = useState(false);

  properties.map((prop) =>
    coordinates.push({ latitude: prop.latitude, longitude: prop.longitude })
  );

  useEffect(() => {
    const unsub = mapView.current.fitToCoordinates(coordinates, {
      top: 190,
      bottom: 190,
      left: 190,
      right: 190,
    });

    return unsub;
  }, [properties]);

  const ShowPrice = () => {
    setStatusPrice(!statusPrice);
  };

  return (
    <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
      {properties?.map((prop) => {
        return (
          <Marker
            key={prop.id}
            title={prop.name}
            pinColor="#003580"
            description="Click On Marker To Show The Price"
            coordinate={{
              latitude: parseInt(prop.latitude),
              longitude: parseInt(prop.longitude),
            }}
            onPress={ShowPrice}
          >
            {statusPrice && (
              <Pressable
                style={{
                  paddingVertical: 5,
                  borderRadius: 5,
                  backgroundColor: "#003580",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  {prop.newPrice}
                </Text>
              </Pressable>
            )}
          </Marker>
        );
      })}
    </MapView>
  );
};

export default MapScreen;
