import React from "react";
import { View, Text } from "react-native";
import TextFont from "../textFont";
import { styles } from "./styles";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <TextFont textType={'Regular'}>
        <Text style={styles.title}>{title}</Text>
      </TextFont>
    </View>
  );
};

export default Header;