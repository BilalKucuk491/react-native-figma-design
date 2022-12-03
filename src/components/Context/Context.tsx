import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import dummyContext from '../../assets/Data/dummyContext';
import {icons, SIZES} from '../../constants';
import {FontIos} from '../../constants/theme';
import FormelleStruktur from '../Zuletzt/FormelleStruktur';
import FormalerAufbau from '../Zuletzt/FormalerAufbau';
import Formulierungshilfen from '../Zuletzt/Formulierungshilfen';
import EpochenDerNaturlyrik from '../Zuletzt/EpochenDerNaturlyrik';
import AlsWichtigMarkierteInfos from '../Zuletzt/AlsWichtigMarkierteInfos';

const marginDistance = (SIZES.width - 337) / 3;

const Context = () => {
  return (
    <View style={styles.container}>
      <FormelleStruktur />
      
      <FormalerAufbau />
      <Formulierungshilfen />
      <EpochenDerNaturlyrik />
      
      {/* <FormalerAufbau />
      <Formulierungshilfen />
      <EpochenDerNaturlyrik />
      <AlsWichtigMarkierteInfos /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: marginDistance / 2,
  },
});

export default Context;
