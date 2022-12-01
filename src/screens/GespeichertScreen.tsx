import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {CardList} from '../components/Card';
import dummyData from '../assets/Data/dummyData';
import DetailCard from '../components/DetailCard/DetailCard';

const GespeichertScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <CardList data={dummyData} />
      </View>
      <View style={{height: 65}}>
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
    backgroundColor: COLORS.backgroundColor,
  },
});

export default GespeichertScreen;
