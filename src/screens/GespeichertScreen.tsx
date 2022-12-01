import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CardList} from '../components/Card';
import dummyData from '../assets/Data/dummyData';
import DetailCard from '../components/DetailCard/DetailCard';
import Header from '../components/Header/index';

const GespeichertScreen = () => {
  return (
    <>
       <View style={{height: 150, backgroundColor: '#fff'}}>
          <Header />
        </View>
        <View style={styles.container}>
          <CardList data={dummyData} />
        </View>
      <View style={{height: 65, bottom: 0}}>
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
});

export default GespeichertScreen;
