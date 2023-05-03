import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useToken } from "../../../contexts/TokenContext";

export default function Action() {
  const token = useToken();

  return (
    <View>
      <Text>Action Like {token}</Text>
    </View>
  );
}
