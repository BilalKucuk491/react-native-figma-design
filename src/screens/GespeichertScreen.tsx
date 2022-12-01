import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {CardList} from '../components/Card';
import DetailCard from '../components/DetailCard/DetailCard';
import {icons, SIZES} from '../constants';
import {FontIos} from '../constants/theme';
import Header from '../components/Header';

const GespeichertScreen = () => {
  return (
    <>
      <Header />

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
});

export default GespeichertScreen;
