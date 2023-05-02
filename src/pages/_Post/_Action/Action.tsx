import { View, Text } from "react-native";
import React from "react";

interface Props {
  token: string;
}

export default function Action({ token }: Props) {
  return (
    <View>
      <Text>Action Like {token} </Text>
    </View>
  );
}
