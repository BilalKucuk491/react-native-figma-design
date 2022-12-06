import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {image_02} from '../../constants/images';
import {SIZES} from '../../constants';
import {FontIos} from '../../constants/theme';
import {Image06} from '../../assets/newimages';
import {horizontalScale, verticalScale} from '../../constants/metrics';

const HeaderPoster = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowImageContainer}>
        <Image style={styles.image} source={image_02} />
      </View>
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
    top: verticalScale(20),
    flexDirection: 'row',
    marginLeft: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  contextContainer: {
    marginLeft: horizontalScale(14),
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 8,
  },
  text_01: {
    marginTop: verticalScale(14),
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
  shadowImageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 156,
      height: 156,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 21,
    borderRadius: 8,
  },
});
export default HeaderPoster;
