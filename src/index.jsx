import React, { useState } from "react";
import {useFonts} from 'expo-font'
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import AppNavigator from "./navigation/index";

import {init} from './db'

import { Provider } from "react-redux";
import store from './store/index';
import { colors } from "./constants";

init()
  .then(() => {
    console.log('Initialized database')
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err)
  })

const App = () => {
  const [loaded] = useFonts({
    'Neuton-Regular': require('../assets/fonts/Neuton-Regular.ttf'),
    'Neuton-Italic': require('../assets/fonts/Neuton-Italic.ttf'),
    'Neuton-Light': require('../assets/fonts/Neuton-Light.ttf'),
    'Neuton-ExtraLight': require('../assets/fonts/Neuton-ExtraLight.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
};

export default App;
