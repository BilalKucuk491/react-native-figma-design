import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CardList} from '../components/Card';
import DetailCard from '../components/DetailCard/DetailCard';
import {SIZES} from '../constants';

const GespeichertScreen = () => {
  return (
    <>
      <View style={styles.GespeichertContainer}>
        <Text style={styles.Gespeichert}>Gespeichert</Text>
      </View>

      <CardList />

      <DetailCard />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  GespeichertContainer: {},
  Gespeichert: {},
});

export default GespeichertScreen;
