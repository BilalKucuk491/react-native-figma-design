import {StyleSheet, ScrollView} from 'react-native';
import React,{ useRef,useEffect } from 'react';
import DetailCard from '../components/DetailCard/DetailCard';
import HeaderContext from '../components/HeaderContext/HeaderContext';
import HeaderPoster from '../components/HeaderPoster';
import Context from '../components/Context';

const ZuletztScreen = () => {
  var scrollViewRef = useRef();


  return (
    <>
      <HeaderContext  />

      <ScrollView showsVerticalScrollIndicator={false}
      >
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
