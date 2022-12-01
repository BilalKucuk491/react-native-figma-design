import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constants/index';

const width = Dimensions.get('window').width;
interface Card {
  image_path: any;
  imageTitle: string;
  imageArtist: string;
}

const Card = ({image_path, imageTitle, imageArtist}: Card) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
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
    height: 210,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 165,
    width: 165,
  },
  imageTitle: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17.9,
  },
  imageArtist: {
    color: COLORS.artistColor,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17.9,
  },
});

export default Card;
