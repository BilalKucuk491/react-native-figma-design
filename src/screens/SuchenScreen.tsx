import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const SuchenScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Suchen Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SuchenScreen;
