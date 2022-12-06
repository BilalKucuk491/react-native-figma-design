import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/index';
import dummyData from '../../assets/Data/dummyData';
import {FontIos} from '../../constants/theme';
import {verticalScale} from '../../constants/metrics';
import {DropShadowBase} from 'react-native-drop-shadow';
import {Platform} from 'react-native';


const DetailCard = () => {
  return (
    <View style={{height: 65, bottom: 0}}>
      <View style={styles.container}>
      <View style={styles.shadowImageContainer}>
        <Image source={dummyData[4].image_path} style={styles.image} />

        </View>

        <View style={styles.HeaderContainer}>
          <View style={styles.TitleContainer}>
            <Text style={styles.imageTitle}>
              {dummyData[4].imageTitle.length < 250
                ? `${dummyData[4].imageTitle}`
                : `${dummyData[4].imageTitle.substring(0, 40)}...`}
            </Text>
            <Text style={styles.dots}>...</Text>
          </View>

          <Text style={styles.imageArtist}>
            {dummyData[4].imageArtist.length < 250
              ? `${dummyData[4].imageArtist}`
              : `${dummyData[4].imageArtist.substring(0, 40)}...`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e9e5e5',
    position: 'absolute',
    bottom: verticalScale(0),
    width: SIZES.width,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderRadius: 10,
  },
  shadowImageContainer:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 8.0,

    elevation:24,
    borderRadius: 10,
    backgroundColor:"red",

  },
  imageTitle: {
    color: '#000',
    fontSize: 15,
    fontFamily: FontIos,
  },
  imageArtist: {
    color: '#A2A2A6',
    marginBottom: 15,
  },
  TitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width - 100,
    alignItems: 'center',
  },
  HeaderContainer: {
    marginLeft: 10,
    top: 0,
    marginTop: 10,
  },
  dots: {
    color: '#C6C8CD',
    fontSize: 20,
    fontFamily: FontIos,
  },
});

export default DetailCard;
