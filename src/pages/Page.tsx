import { View, Text } from "react-native";
import React from "react";
import Post from "./_Post/Post";

interface Props {
  token: string;
}

export default function Page({ token }: Props) {
  return (
    <View>
      <Text>Page {token}</Text>

      <Post token={token} />
    </View>
  );
}
