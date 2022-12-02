import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {image_02} from '../../constants/images';
import {SIZES} from '../../constants';
import {FontIos} from '../../constants/theme';

const marginDistance = (SIZES.width - 337) / 3;

const HeaderPoster = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image_02} />
      <View style={styles.contextContainer}>
        <Text style={styles.text_01}>Naturlyrik: Gedichtsanal</Text>
        <Text style={styles.text_02}>Deutsch</Text>
        <Text style={styles.text_03}>LOCKER PLAYLIST</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    flexDirection: 'row',
    marginLeft: marginDistance,
    marginBottom: marginDistance,
  },
  contextContainer: {
    marginLeft: marginDistance / 2,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text_01: {
    marginTop: 25,
    fontWeight: '500',
    fontSize: 19,
    color: '#000',
    fontFamily: FontIos,
  },
  text_02: {
    lineHeight: 30,
    fontWeight: '500',
    fontSize: 22,
    color: '#007AFE',
    fontFamily: FontIos,
  },
  text_03: {
    lineHeight: 18,
    color: '#898A8D',
    fontWeight: '700',
    fontSize: 11,
    fontFamily: FontIos,
  },
});
export default HeaderPoster;
