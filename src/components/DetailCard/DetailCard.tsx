import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../constants/index';
import {CardInterface} from '../../types/CardInterface';

const DetailCard = ({image_path, imageTitle, imageArtist}: CardInterface) => {
  return (
    <View style={styles.container}>
      {image_path !== null ? (
        <Image source={{uri: image_path}} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}

      <View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.imageTitle}>
            {imageTitle === null
              ? 'NONE'
              : imageTitle.length < 250
              ? `${imageTitle}`
              : `${imageTitle.substring(0, 40)}...`}
          </Text>
          <Text style={styles.dots}>...</Text>
        </View>

        <Text style={styles.imageTitle}>
          {imageArtist === null
            ? 'NONE'
            : imageArtist.length < 250
            ? `${imageArtist}`
            : `${imageArtist.substring(0, 40)}...`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: 250,
    borderWidth: 1,
    borderRadius: 20,
  },
  imageTitle: {
    color: '#000',
    fontSize: 15,
  },
  imageArtist: {
    color: 'grey',
  },
  HeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dots: {
    color: 'grey',
    fontSize: 20,
  },
});

export default DetailCard;
