import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../constants/index';
interface Card {
  image_path: string;
  imageTitle: string;
  imageArtist: string;
}

const Card = ({image_path, imageTitle, imageArtist}: Card) => {
  return (
    <View style={styles.container}>
      {image_path !== null ? (
        <Image source={{uri: image_path}} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}
      {
        <Text style={styles.imageTitle}>
          {imageTitle === null
            ? 'NONE'
            : imageTitle.length < 250
            ? `${imageTitle}`
            : `${imageTitle.substring(0, 20)}...`}
        </Text>
      }
       <Text style={styles.imageTitle}>
          {imageTitle === null
            ? 'NONE'
            : imageTitle.length < 250
            ? `${imageTitle}`
            : `${imageTitle.substring(0, 20)}...`}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
});

export default Card;
