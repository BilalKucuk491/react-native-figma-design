import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import dummyData from '../assets/Data/dummyData';
import DetailCard from '../components/DetailCard/DetailCard';
import HeaderContext from '../components/HeaderContext/HeaderContext';
import HeaderPoster from '../components/HeaderPoster';
import Context from '../components/Context';

const ZuletztScreen = () => {
  return (
    <>
      <HeaderContext  />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderPoster />
        <Context />
      </ScrollView>

      <DetailCard />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ZuletztScreen;
