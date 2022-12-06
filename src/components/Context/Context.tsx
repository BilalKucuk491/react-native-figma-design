import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants';
import FormelleStruktur from '../Zuletzt/FormelleStruktur';
import FormalerAufbau from '../Zuletzt/FormalerAufbau';
import Formulierungshilfen from '../Zuletzt/Formulierungshilfen';
import EpochenDerNaturlyrik from '../Zuletzt/EpochenDerNaturlyrik';
import AlsWichtigMarkierteInfos from '../Zuletzt/AlsWichtigMarkierteInfos';
import { verticalScale } from '../../constants/metrics';


const Context = () => {
  return (
    <View style={styles.container}>
      
      <FormelleStruktur />
      <FormalerAufbau />
      <Formulierungshilfen />
      <EpochenDerNaturlyrik />
      <AlsWichtigMarkierteInfos />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(30),
  },
});

export default Context;
