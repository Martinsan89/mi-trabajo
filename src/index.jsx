import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header } from "./components";
import AppNavigator from "./navigation";
import { Employer, Home, User } from "./screens/index";
import { styles } from "./styles";

const App = () => {
  const [selectUser, setSelectUser] = useState("");
  const [selected, setSelected] = useState(false);

  const SelectedUser = () => {
    if (selected) {
      if (selectUser === "user") {
        return <User setSelected={setSelected} />;
      } else {
        return <Employer setSelected={setSelected} />;
      }
    } else {
      return <Home setSelectUser={setSelectUser} setSelected={setSelected} />;
    }
  };

  return (
    <View style={styles.root}>
      <AppNavigator />
    </View>
  );
};

export default App;
