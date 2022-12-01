import {View, Text,Image,StyleSheet} from 'react-native';
import React from 'react';
import { image_02 } from '../../constants/images';
const HeaderPoster = () => {
  return (
    <View style={styles.container} >
      <Image style={styles.image} source={image_02} />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    marginTop:10,
  },
  image:{
    
  }
})
export default HeaderPoster;
