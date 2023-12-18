import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const colorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

export default colorCounter;
