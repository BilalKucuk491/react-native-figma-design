import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {images, SIZES} from '../../constants/index';
import {CardInterface} from '../../types/CardInterface';

const DetailCard = ({image_path, imageTitle, imageArtist}: CardInterface) => {
  return (
    <View style={styles.container}>
      {image_path !== null ? (
        <Image source={image_path} style={styles.image} />
      ) : (
        <Image source={images.notFoundImage} style={styles.image} />
      )}

      <View  style={styles.HeaderContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.imageTitle}>
            {imageTitle === null
              ? 'NONE'
              : imageTitle.length < 250
              ? `${imageTitle}`
              : `${imageTitle.substring(0, 40)}...`}
          </Text>
          <Text style={styles.dots}>...</Text>
        </View>

        <Text style={styles.imageArtist}>
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
    backgroundColor: '#e9e5e5',
    position: 'absolute',
    bottom: 0,
    width: SIZES.width,
    height:60,
    justifyContent:"center",
    alignItems:"center"
  },
  image: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderRadius: 10,
  },
  imageTitle: {
    color: '#000',
    fontSize: 15,
  },
  imageArtist: {
    color: '#A2A2A6',
    marginBottom:10

  },
  TitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width - 100,
    alignItems:"center"
  },
  HeaderContainer:{
    marginLeft:10,
    top:0
  },
  dots: {
    color: '##C6C8CD',
    fontSize: 20,
  },
});

export default DetailCard;
