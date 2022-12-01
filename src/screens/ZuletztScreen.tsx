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
      <HeaderContext />

      <ScrollView
        showsVerticalScrollIndicator={false}
       >
        <HeaderPoster />

        <Context />
      </ScrollView>

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
    bottom: 0,
  },
});

export default ZuletztScreen;
