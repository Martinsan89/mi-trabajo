import React from "react";
import { View, Text } from "react-native";
import TextFont from "../textFont";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <TextFont textType={'Regular'}>
        <Text style={styles.title}>Mi-Trabajo</Text>
      </TextFont>
    </View>
  );
};

export default Header;