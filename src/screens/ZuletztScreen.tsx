import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import dummyData from '../assets/Data/dummyData';
import DetailCard from '../components/DetailCard/DetailCard';
import HeaderContext from '../components/HeaderContext/HeaderContext';
import HeaderPoster from '../components/HeaderPoster';

const ZuletztScreen = () => {
  return (
    <>
      <HeaderContext />
      <HeaderPoster />
      <View style={styles.detailCardContainer}>
        <DetailCard
          imageArtist={dummyData[4].imageArtist}
          image_path={dummyData[4].image_path}
          imageTitle={dummyData[4].imageTitle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailCardContainer: {
    height: 65,
    position: 'absolute',
    bottom: 0,
  },
});

export default ZuletztScreen;
