import React from "react";
import { Button, View, Text } from "react-native";
import ColorCounter from "../components/colorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

export default SquareScreen;
