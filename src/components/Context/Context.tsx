import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import dummyContext from '../../assets/Data/dummyContext';

const Context = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.title}>{dummyContext[0].title}</Text>
        <View style={styles.line}></View>
      </View>
      <Text>{dummyContext[0].subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 45,
    marginLeft:40
  },
  title: {},
  subTitle: {},
  line: {
    backgroundColor: '#C6C6C8',
    height: 1.1,
  },
});

export default Context;
