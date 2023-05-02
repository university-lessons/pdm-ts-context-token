import { View, Text } from "react-native";
import React from "react";
import Action from "./_Action/Action";

interface Props {
  token: string;
}

export default function Post({ token }: Props) {
  return (
    <View>
      <Text>Post {token} </Text>

      <Action token={token} />
    </View>
  );
}
