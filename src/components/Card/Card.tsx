import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../constants/index';
import {useNavigation} from '@react-navigation/native';
import {FontIos} from '../../constants/theme';

interface Card {
  image_path: any;
  imageTitle: string;
  imageArtist: string;
}

const Card = ({image_path, imageTitle, imageArtist}: Card) => {
  const navigation = useNavigation();
  // onPress={() => navigation.navigate('Zuletzt')}
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ZuletztScreen')}>
        {image_path !== null ? (
          <Image source={image_path} style={styles.image} />
        ) : (
          <Image source={images.notFoundImage} style={styles.image} />
        )}
      </TouchableOpacity>
      {
        <Text style={styles.imageTitle}>
          {imageTitle === null
            ? 'NONE'
            : imageTitle.length < 250
            ? `${imageTitle}`
            : `${imageTitle.substring(0, 20)}...`}
        </Text>
      }
      <Text style={styles.imageArtist}>
        {imageArtist === null
          ? 'NONE'
          : imageTitle.length < 250
          ? `${imageArtist}`
          : `${imageArtist.substring(0, 20)}...`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 220,
    marginLeft: (SIZES.width - 165 * 2) / 3,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 165,
    width: 165,
  },
  imageTitle: {
    color: '#000',
    fontSize: 15,
    fontFamily: FontIos,
    fontWeight: '400',
    lineHeight: 17.9,
    top: 10,
  },
  imageArtist: {
    color: COLORS.artistColor,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: FontIos,
    lineHeight: 17.9,
    top: 15,

  },
});

export default Card;
